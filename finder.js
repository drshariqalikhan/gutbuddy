/*
  Copyright 2017 Shariq ali khan. All Rights Reserved.

*/
'use strict';
module.exports =
    {
        locater:function (st)
        {
          switch(st) {
          case "gut_ai.Hi":
              return "ai.HI intent";
              break;
          case "gut_ai.Hi - yes":
              return "ai.HI intent-yes";
              break;
          case "gut_ai.Hi - no":
             return "ai.HI intent-no";
              break;
          case "WEather":
             return "weather intent";
              break;
          case "magic":
              return "magic intent";
              break;
          default:
               return "??"+ st;
     } 

        }
    };

