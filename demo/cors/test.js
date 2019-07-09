function thunkify(fn){
  return function(){
   
    let ctx = this;

    let args =Array.prototype.slice.call(arguments)

    return function(done){
      let called;
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
  let sum = a + b;
  callback(sum);
}

let ft = thunkify(f);

 function * gen(){
  let r1 = yield ft(1,2);
  let r2 = yield ft(3,4);
};

let g=gen();

let r1=g.next();

r1.value(function(args){
  console.log(args)
  let r2 = g.next();
  r2.value(function(args){
    console.log(args)
    g.next();
  });
});
