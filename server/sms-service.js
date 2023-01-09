require('dotenv').config();
const accountSid = process.env.VITE_TWILIO_ACCOUNT_SID;
const authToken = process.env.VITE_TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken, {
  logLevel: 'debug'
});

function sendSms(message) {
  client.messages
  .create({
     body: message,
     from: "+16696006178",
     to: "+14256256905"
   })
  .then(message => console.log(message.sid));
}
module.exports.sendSms = sendSms;