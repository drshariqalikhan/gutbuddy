/*
  Copyright 2017 Shariq ali khan. All Rights Reserved.

*/
'use strict';
const rsp = require('./responses.js');
module.exports =
    {
        responder:function (st)
        {
          switch(st) {
          case "getstarted":
              return rsp.getstartedresp;
              break;
          case "question1":
              return rsp.question1resp;
              break;
          case "question2":
             return rsp.question2resp;
              break;
          case "question3":
             return rsp.question3resp;
              break;
          case "Displayresults":
              return rsp.Displayresultsresp;
              break;
          case "gb_advice":
              return rsp.gb_adviceresp;
          case "Default Fallback Intent":
              return rsp.defaultresp;
          default:
               return rsp.defaultresp;
     } 

        }
    };

