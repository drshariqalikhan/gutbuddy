'use strict';
var speech = "";
var state;
const express = require('express');
const bodyParser = require('body-parser');
const fd = require('./finder');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



app.post('/echo', function(req, res) {
    
    //var speech = JSON.stringify(req.body.result.parameters.mcount);

    //detect intent
    state = req.body.result.metadata.intentName;
    switch(state) {
    case "gut_ai.Hi":
       speech = "ai.HI intent";
        break;
    case "gut_ai.Hi - yes":
        speech = "ai.HI intent-yes";
        break;
    case "gut_ai.Hi - no":
       speech = "ai.HI intent-no";
        break;
    case "WEather":
       speech = "weather intent";
        break;
    case "magic":
        speech = "magic intent";
        break;
    default:
       speech = "??"+ state;
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
