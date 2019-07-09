function thunkify(fn){
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
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
};

function f(a, b, callback){
  var sum = a + b;
  callback(sum);
}

var ft = thunkify(f);

 function * gen(){
  var r1 = yield ft(1,2);
  var r2 = yield ft(3,4);
};

let g=gen();

let r1=g.next();

r1.value(function(args){
  console.log(args)
  var r2 = g.next();
  r2.value(function(args){
    console.log(args)
    g.next();
  });
});