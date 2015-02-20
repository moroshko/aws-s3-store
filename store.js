var uuid = require('node-uuid');
var AWS = require('aws-sdk');
var s3 = null;

function init(params) {
  params = params || {};

  if (!params.bucket) {
    throw new Error("'bucket' key must exist");
  }

  s3 = new AWS.S3({
    params: {
      Bucket: params.bucket
    }
  });
}

function create(object, cb) {
  if (s3 === null) {
    throw new Error("Call init({ bucket: <your S3 bucket> }) first");
  }

  var params = {
    Key: uuid.v1(),
    Body: JSON.stringify(object)
  };

  s3.putObject(params, function(err) {
    if (err) {
      cb(err);
    } else {
      cb(null, params.Key);
    }
  });
}

function get(objectId, cb) {
  if (s3 === null) {
    throw new Error("Call init({ bucket: <your S3 bucket> }) first");
  }

  var params = {
    Key: objectId
  };

  s3.getObject(params, function(err, data) {
    if (err) {
      cb(err);
    } else {
      cb(null, JSON.parse(data.Body.toString()));
    }
  });
}

module.exports = {
  init: init,
  create: create,
  get: get
};
