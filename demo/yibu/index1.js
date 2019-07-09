const fs = require('fs');


function thunkify(fn) {
    return function () {
        var args = new Array(arguments.length);
        var ctx = this;

        for (var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
        }

        return function (done) {
            var called;
            args.push(function () {
                if (called) return;
                called = true;
                done.apply(null, arguments);
            });

            try {
                fn.apply(ctx, args);
            } catch (err) {
                done(err);
            }
        }
    }
};

let readFile = thunkify(fs.readFile);

var gen = function* (){
  var r1 = yield readFile('./app.css');
  console.log('r1');
  var r2 = yield readFile('./app.json');
  console.log('r2');
};

function run(fn) {
    let gen = fn();
    console.log(gen)
    function next(err, data) {
        let res = gen.next(data);
        console.log(res)
        if (res.done) return;
        res.value(next);
    }
    next();
}
run(gen)