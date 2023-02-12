const express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const app = express();
var cors = require('cors');
require('dotenv').config();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT === undefined ? 3000 : process.env.PORT;
app.use(cors());
app.use(express.json());
var smsService = require("./sms-service");

app.get('/hello', function (req, res) {
  return res.send('Hello world');
 });

app.post('/sendSms', function (req, res) {
  smsService.sendSms(req.body.message);
  return res.send('Message sent to tilio');
});

app.listen(port);

console.log('Server running in Port: ' + port);