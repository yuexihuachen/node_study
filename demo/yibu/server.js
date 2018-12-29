'use strict';

    var express = require('express');
    var thunkify = function(fn){
      return function(){
        var args = new Array(arguments.length);
        var ctx = this;
    
        for(var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }
        
        return function(done){
          var called;
          args.push(function(){
            if (called) return;
            called = true;
            done.apply(null, arguments);
            //console.log(arguments[1].toString())
          });
          try {
            fn.apply(ctx, args);
          } catch (err) {
            done(err);
          }
        }


      }
    };
    var fs = require('fs');

    var read = thunkify(fs.readFile);

    var gen=function *(){
        var r1=yield read('app.json');
        console.log(r1.toString())
        yield read('app.wxss');
        //console.log(r2.toString());
        var r3=yield read('package.json');
        //console.log(r3.toString());
    }

    function run(fn) {
      var gen = fn();
      function next(err, data) {
        console.log("init ",data?data.toString():'')
        var result = gen.next(data);
        console.log("start:",data)
        if (result.done) return;
        result.value(next);
        console.log("end:",data)
      }
      next();
    }

    var PORT = 8888;

    var app = express();
    app.get('/', function (req, res) {
      var data=run(gen);
      res.send(data+'\n');
    });

    



    app.listen(PORT);
    console.log('Running on http://localhost:' + PORT);

