let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	

	callback(null, 'Successfully executed');


	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:wqdwq'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});

}