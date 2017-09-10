'use strict';
var speech = "";
var state;
const express = require('express');
const bodyParser = require('body-parser');
const fd = require('./finder.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



app.post('/echo', function(req, res) {
    
    //var speech = JSON.stringify(req.body.result.parameters.mcount);

    //detect intent
    state = req.body.result.metadata.intentName;
    speech = fd.locater(state);

    
    
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});
app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
