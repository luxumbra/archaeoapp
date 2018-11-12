const functions = require('firebase-functions');
// facilitates file manipulation in the bucket
// node package so we can interface with the OS filesystem.
const os = require('os');
const fs = require('fs');
const path = require('path');
const spawn = require('child-process-promise').spawn;
const corsOptions = {
  origin: "*"
};
const cors = require('cors')({corsOptions});
const Busboy = require('busboy');
const gcsconfig = {
  projectId: 'archaeoapp-1539547680569',
  keyFilename: 'archaeoapp-1539547680569-firebase-adminsdk-zw877-0542389b4c.json'
}
const storageBucket = 'archaeoapp-1539547680569.appspot.com';
const { Storage } = require('@google-cloud/storage');
const storage = new Storage(gcsconfig);
const slugify = require('slugify');


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

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  cors(req, res, () => {

    if (req.method !== 'POST') {
      return res.status(500).json({
        message: 'Not allowed!'
      });
    }

    const busboy = new Busboy({headers: req.headers});
    let uploadData = {};

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {

      console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);

      const sluggedFilename = slugify(filename, {
        remove: / [* +~()'"!:@]/g,
        lower: true
      });
      const filePath = path.join(os.tmpdir(), sluggedFilename);

      uploadData = {file: filePath, type: mimetype}
      file.pipe(fs.createWriteStream(filePath));
    })

    busboy.on('finish', () => {
      console.log('Finished parsing form...', uploadData);

      const bucket = storage.bucket(storageBucket);
      bucket.upload(uploadData.file, {
        uploadType: 'media',
        metadata: {
          metadata: {
            contentType: uploadData.type
          }
        }
      }).then(() => {
        res.status(200).json({
          message: 'Uploaded!'
        });
        return true;
      }).catch(err => {
        res.status(500).json({
          error: err
        });
        return err;
      });
    });

    return busboy.end(req.rawBody);
  });
});

exports.onFileDelete = functions.storage.object().onDelete(event => {
  console.log('CF Delete event: ', event);
  return false;
});
