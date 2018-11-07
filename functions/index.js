const functions = require('firebase-functions');
// facilitates file manipulation in the bucket
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
// node package so we can interface with the OS filesystem.
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;


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
  })
});

exports.onFileDelete = functions.storage.object().onDelete(event => {
  console.log('CF Delete event: ', event);
  return false;
});
