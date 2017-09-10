'use strict';
var speech = "";
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post('/echo', function(req, res) {
    
    //var speech = JSON.stringify(req.body.result.parameters.mcount);
    if(req.body.result.metadata.intentName == "magic")
    {
        speech = JSON.stringify(req.body.result.parameters.mcount);
    }
    else
    {
        speech = "false";
    }
    
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});
app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
