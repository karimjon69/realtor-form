const express = require('express');
const app = express();
var cors = require('cors');
require('dotenv').config();
var smsService = require("./sms-service");

app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
  return res.send('Hello world');
 });

app.post('/sendSms', function (req, res) {
  smsService.sendSms(req.body.message);
  return res.send('Message sent to tilio');
});

app.listen(process.env.PORT || 8081);