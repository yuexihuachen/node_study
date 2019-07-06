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
  let f1=yield ft(1,2);
  let f2=yield ft(2,3);
  let f3=yield ft(3,4);
  let f4=yield ft(4,5);

}

function run(fn) {
  let gen=fn();
  function next(err,data){
    let res=gen.next(data);
    if(res.done) return;
    res.value(next);
  }
  next();
}
run(gen)