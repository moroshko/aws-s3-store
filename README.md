### Usage

Make sure to [set up AWS credentials](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Setting_AWS_Credentials). Then:

###### Set up

    var s3Store = require('aws-s3-store');

    s3Store.init({ bucket: 'my-s3-bucket-name' });

###### Store object

    s3Store.create(myObject, function(err, createdObjectId) {
      if (err) {
        console.log(err);
      } else {
        console.log("Randomly generated unique object id: ", createdObjectId);
      }
    });
    
###### Get object

    s3Store.get(objectId, function(err, object) {
      if (err) {
        console.log(err);
      } else {
        console.log("Retrieved object: ", object);
      }
    });