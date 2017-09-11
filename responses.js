/*
  Copyright 2017 Shariq ali khan. All Rights Reserved.
*/
'use strict';
module.exports = {
        firstGreet: {
                      "facebook": {
                        "attachment": {
                          "type": "template",
                          "payload": {
                            "template_type": "button",
                            "text": "question 1?",
                            "buttons": [
                              {
                                "type": "postback",
                                "title": "more than once a week",
                                "payload": "more than once a week"
                              },
                              {
                                "type": "postback",
                                "title": "less than once a month",
                                "payload": "less than once a month"
                              },
                              {
                                "type": "postback",
                                "title": "other",
                                "payload": "other"
                              }
                            ]
                          }
                        }
                      }
                    }
    };
 
