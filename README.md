### Usage

Make sure to [set up AWS credentials](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Setting_AWS_Credentials). One way to achieve this is to create `~/.aws/credentials` with the following content:

    [default]
    aws_access_key_id = <YOUR_ACCESS_KEY_ID>
    aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>

Now, run `npm install`, and you are ready to go.

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