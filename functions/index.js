const functions = require('firebase-functions');
// facilitates file manipulation in the bucket
// node package so we can interface with the OS filesystem.
const os = require('os');
const fs = require('fs');
const path = require('path');
const spawn = require('child-process-promise').spawn;
const cors = require('cors')({origin: true});
const Busboy = require('busboy');
const gcsconfig = {
  projectId: 'archaeoapp-1539547680569',
  keyFilename: 'archaeoapp-1539547680569-firebase-adminsdk-zw877-0542389b4c.json'
}
const { Storage } = require('@google-cloud/storage');
const storage = new Storage(gcsconfig);

exports.onFileChange = functions.storage.object().onFinalize(event => {
 console.log('CF change Event: ', event);
  const object = event;
  const bucket = object.bucket;
  const contentType = object.contentType;
  const filePath = object.name;
  console.log('File change detected! Function execution started.');
  console.log(object);

  if(object.resourceState === 'not_exists') {
    console.log('this file was deleted. Exit...');
    return false;
  }

  if(path.basename(filePath).startsWith('resized-')) {
    console.log('We already renamed this file.');
    return false; // always `return false;`, not simply `return;` (consistent-returns (ESLint))
  }

  const destBucket = storage.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = { contentType: contentType };

  return destBucket.file(filePath).download({
    destination: tmpFilePath
  }).then(() => {
    return spawn('convert', [tmpFilePath, ('-resize', '500x500',tmpFilePath)]);
  }).then(() => {
    return destBucket.upload(tmpFilePath, {
      destination: 'resized-' + path.basename(filePath),
      metadata: metadata
    });
  });
});

exports.uploadFile = functions.https.onRequest((req, res) => {

  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(500).json({
        message: 'Not allowed!'
      });
    }
    const busboy = new Busboy({headers: req.headers});
    let uploadData = null;

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const filePath = path.join(os.tmpdir(), filename);
      uploadData = {file: filePath, type: mimetype}
      file.pipe(fs.createWriteStream(filePath));
    })

    busboy.on('finish', () => {
      const bucket = storage.bucket('archaeoapp-1539547680569.appspot.com');
      bucket.upload(uploadData.file, {
        uploadType: 'media',
        metadata: {
          metadata: {
            contentType: uploadData.type
          }
        }
      }).then(() => {
        return res.status(200).json({
          message: 'Uploaded!'
        })
      }).catch(err => {
        return res.status(500).json({
          error: err
        });
      });
    });
    return busboy.end(req.rawBody);

  });
});

exports.onFileDelete = functions.storage.object().onDelete(event => {
  console.log('CF Delete event: ', event);
  return false;
});
