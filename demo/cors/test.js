// function thunkify(fn) {
//   return function () {
//     let ctx = this;
//     let args = Array.prototype.slice.call(arguments)
//     return function (done) {
//       let called;
//       args.push(function () {
//         if (called) return;
//         called = true;
//         done.apply(null, arguments);
//       });
//       try {
//         fn.apply(ctx, args);
//       } catch (err) {
//         done(err);
//       }
//     }
//   }
// };

// function f(a, b, callback) {
//   let sum = a + b;
//   callback(sum);
// }

// let ft = thunkify(f);

// function* gen() {
//   let r1 = yield ft(1, 2);
//   let r2 = yield ft(3, 4);
//   let r2 = yield ft(5, 6);
// };


// function run(fn) {
//   let gen = fn();
//   function next(data) {
//     console.log(data)
//     let res = gen.next(data);
//     if (res.done) return;
//     res.value(next);
//   }
//   next();
// }

// run(gen);
// ------------------------
// let g = gen();
// let r1 = g.next();
// r1.value(function (args) {
//   console.log(args)
//   let r2 = g.next();
//   r2.value(function (args) {
//     console.log(args)
//     g.next();
//   });
// });


/**8******************* */

function f(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

let ft = function (a,b){
  return new Promise(function (resolve, reject){
    f(a,b,function(data){
      resolve(data);
    });
  });
};

function* gen() {
  let r1 = yield ft(1, 2);
  let r2 = yield ft(3, 4);
  let r3 = yield ft(5, 6);
};

function run(gen){
  var g = gen();

  function next(data){
    console.log(data)
    var result = g.next(data);
    if (result.done) return;
    result.value.then(function(data){
      next(data);
    });
  }

  next();
}

run(gen);


var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});
console.log(sum); //15