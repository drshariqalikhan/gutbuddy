'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fd = require('./finder.js');
const rsp = require('./responses.js');
const xl = require('./xlwrite.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



app.post('/echo', function(req, res) {
    xl.record(200);
    //detect intent
    var output = fd.responder(req.body.result.metadata.intentName);
  
   //respond approriately 
   return res.json (output);
});
app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
