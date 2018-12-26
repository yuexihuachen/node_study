// var sales={};

// sales.clientList=[];

// sales.listen=function(key,fn){
//   if(!this.clientList[key]){
//     this.clientList[key]=[];
//   }
//   this.clientList[key].push(fn);
// }

// sales.trigger=function(){
//   let key=Array.prototype.shift.call(arguments),
//       fns=this.clientList[key],
//       args=arguments;

//   if(!fns && fns.large===0){
//     return false;
//   }

//   fns.forEach((function(item,index){
//     item.apply(this,args);
//   }).bind(this))
// }

// sales.listen("large88",function(price,large){
//   console.log("price:"+price)
// })

// sales.listen("large110",function(price,large){
//   console.log("price:"+price)
// })

/**********************************************************/


// var event = {
//   clientList: [],
//   listen: function (key,fn) {
//     if (!this.clientList[key]) {
//       this.clientList[key] = [];
//     }
//     this.clientList[key].push(fn);
//   },
//   trigger: function () {
//     let key = Array.prototype.shift.call(arguments),
//       fns = this.clientList[key],
//       args = arguments;

//     if (!fns && fns.large === 0) {
//       return false;
//     }

//     fns.forEach((function (item, index) {
//       item.apply(this, args);
//     }).bind(this))
//   },
//   remove:function(key,fn){
//     var fns=this.clientList[key];

//     if(!fns){
//       return false;
//     } else {
//       fns.forEach((function (item, index) {
//         if(fn===item){
//           fns.splice(index,1);
//         }
//       }).bind(this))
//     }
//   }
// }

// var installEvent = function (obj) {
//   for (var i in event) {
//     obj[i] = event[i];
//   }
// }

// var sales={};

// installEvent(sales);

// sales.listen("large88", fn1=function (price, large) {
//   console.log("price:" + price)
// })

// sales.listen("large88", fn2=function (price, large) {
//   console.log("price:" + price)
// })

// sales.listen("large110", function (price, large) {
//   console.log("price:" + price)
// })


/**********************************************************/

// var login={
//   clientList:[],
//   listen:function(key,fn){
//     if (!this.clientList[key]) {
//       this.clientList[key] = [];
//     }
//     this.clientList[key].push(fn);
//   },
//   trigger: function () {
//     let key = Array.prototype.shift.call(arguments),
//       fns = this.clientList[key],
//       args = arguments;

//     if (!fns && fns.length === 0) {
//       return false;
//     }

//     fns.forEach((function (item, index) {
//       item.apply(this, args);
//     }).bind(this))
//   }
// }

// $.ajax({
//   url: 'http://192.168.36.237:7300/mock/5b17829870f736458b2cf324/example/v1/collect/batch/100/energyinfo',
//   success: function (data) {

//     login.trigger('loginSucc', data);
//   }
// });


// var header = (function () {
//   login.listen('loginSucc', function (data) {
//     header.setAvatar(data);
//   });

//   return {
//     setAvatar: function (data) {
//       console.log("header module");
//     }
//   }
// })();

// var nav=(function(){
//   login.listen('loginSucc',function(data){
//     nav.setAvatar(data);
//   });

//   return {
//     setAvatar: function (data) {
//       console.log('nav module');
//     }
//   }
// })();

// var content=(function(){
//   login.listen('loginSucc',function(data){
//     content.setAvatar(data);
//   });

//   return {
//     setAvatar: function (data) {
//       console.log('content module');
//     }
//   }
// })();

/**********************************************************/

// var Event=(function(){
//   var _listen,
//       _trigger,
//       _remove,
//       _create,
//       namespaceCache={};
//   _listen = function (key, fn,clientList) {
//     if (!clientList[key]) {
//       clientList[key] = [];
//     }
//     clientList[key].push(fn);
//   };

//   _trigger=function () {
//     var clientList=Array.prototype.shift.call(arguments);
//     var key=Array.prototype.shift.call(arguments);
//     var args=arguments;
//     var _self=this;
//     var currentClientList=clientList[key];

//     if(!currentClientList || !currentClientList.length){
//       return false;
//     }


//     return currentClientList.forEach(function(item,index){
//       return item.apply(_self, args);
//     })
//     // let key = Array.prototype.shift.call(arguments),
//     //   fns = clientList[key],
//     //   args = arguments;

//     // if (!fns || fns.length === 0) {
//     //   return false;
//     // }

//     // fns.forEach((function (item, index) {
//     //   item.apply(this, args);
//     // }).bind(this))
//   };

//   _remove=function(key,fn){
//     var fns=clientList[key];

//     if(!fns){
//       return false;
//     } else {
//       fns.forEach((function (item, index) {
//         if(fn===item){
//           fns.splice(index,1);
//         }
//       }).bind(this))
//     }
//   };

//   _create=function(namespace){
//     var namespace = namespace || 'default';
//     var clientList={};
//     var ret={
//       listen:function (key, fn) {
//         _listen(key, fn,clientList);
//       },
//       trigger:function () {
//         var fn,
//             args,
//             _self=this;
//             Array.prototype.unshift.call(arguments,clientList);
//             args=arguments;
//             fn=function(){
//               return _trigger.apply(_self,args);
//             }
//             return fn();
//       },
//       remove:function(key,fn){
//         var fns=clientList[key];
    
//         if(!fns){
//           return false;
//         } else {
//           fns.forEach((function (item, index) {
//             if(fn===item){
//               fns.splice(index,1);
//             }
//           }).bind(this))
//         }
//       }
//     }

//     return namespace ? 
//     (namespaceCache[namespace]?namespaceCache[namespace]:namespaceCache[namespace]=ret) :
//     ret;
//   }

//   return {
//     create:_create,
//     listen:function(){

//     },
//     trigger:function(){
      
//     },
//     remove:function(){
      
//     }
//   }

// })();

// Event.trigger("large88",2000000)


// Event.listen("large88",fn1=function(price){
//   console.log("price:"+price)
// });



// var a=(function(){
//   var count=0;
//   var btn=document.getElementById("count");
//   btn.onclick=function(){
//     Event.trigger("add",count++);
//   }
// })();

// var b=(function(){
//   var div=document.getElementById("show");
//   Event.listen("add",function(count){
//     div.innerHTML=count;
//   })
// })();


/**********************************************************/

// var Event = (function(){
//   var _listen,
//     _trigger,
//     _remove,
//     _shift = Array.prototype.shift,
//     _unshift = Array.prototype.unshift,
//     namespaceCache = {},
//     _create,
//     each = function (ary, fn) {
//       var ret;
//       for (var i = 0, l = ary.length; i < l; i++) {
//         var n = ary[i];
//         ret = fn.call(n, i);
//       }
//       return ret;
//     };

//   _listen = function (key, fn, cache) {//订阅的消息添加到缓存列表
//     //cache缓存订阅消息
//     if (!cache[key]) {
//       cache[key] = [];
//     }
//     cache[key].push(fn);
//   };

//   _remove = function (key, cache, fn) {//取消订阅事件
//     if (cache[key]) {
//       if (fn) {
//         for (var i = cache[key].length; i >= 0; i--) {
//           if (cache[key][i] === fn) {
//             cache[key].splice[i, 1];
//           }
//         }
//       } else {
//         cache[key] = [];
//       }
//     }
//   };

//   _trigger = function () {//发布消息
//     var cache = _shift.call(arguments),//拿到缓存的订阅消息列表
//       key = _shift.call(arguments),//发布的消息名称
//       args = arguments,
//       _self = this,
//       stack = cache[key];//从缓存的订阅消息列表拿到当前发布的消息列表
//     //发布的消息没有订阅
//     if (!stack || !stack.length) {
//       return;
//     }
//     //执行发布后对应的订阅消息
//     return each(stack, function () {
//       return this.apply(_self, args);
//     });
//   };

//   _create = function (namespace) {
//     var namespace = namespace || 'default';
//     var cache = {},
//       offlineStack = [],
//       ret = {
//         listen: function (key, fn, last) {
//           _listen(key, fn, cache);
//           //离线的发布信息，未被订阅
//           if (offlineStack === null) {
//             return;
//           }

//           if (last === 'last') {
//             offlineStack.length && offlineStack.pop()();
//           } else {
//             each(offlineStack, function () {
//               this();
//             });
//           }

//           offlineStack = null;
//         },
//         one: function (key, fn, last) {
//           _remove(key, cache);
//           this.listen(key, fn, last);
//         },
//         remove: function (key, fn) {
//           _remove(key, cache, fn);
//         },
//         trigger: function () {
//           //发布消息
//           var fn,
//             args,
//             _self = this;
//           _unshift.call(arguments, cache); //缓存的订阅消息列表合并到参数里
//           //新的参数
//           args = arguments;
//           //发布消息
//           fn = function () {
//             return _trigger.apply(_self, args);
//           };
//           //是否有离线的发布消息
//           if (offlineStack) {
//             return offlineStack.push(fn);
//           }
//           //执行发布消息
//           return fn();
//         }
//       };

//     return namespace ?
//       (namespaceCache[namespace] ? namespaceCache[namespace] : namespaceCache[namespace] = ret)
//       : ret;
//   };

//   return {
//     create: _create,
//     one: function (key, fn, last) {
//       var event = this.create();
//       event.one(key, fn, last);
//     },
//     remove: function (key, fn) {
//       var event = this.create();
//       event.remove(key, fn);
//     },
//     listen: function (key, fn, last) {
//       //创建
//       var event = this.create();
//       event.listen(key, fn, last);
//     },
//     trigger: function () {
//       var event = this.create();
//       event.trigger.apply(this, arguments);
//     }
//   };

// })();


// Event.create('namespace1').listen('click', function (a) {
//   console.log(a);
// });

// Event.create('namespace1').listen('click', function (a) {
//   console.log(a);
// });

// Event.create('namespace1').trigger('click', 1);



// Event.create('namespace2').trigger('click',1);

// Event.create('namespace2').listen('click',function(a){
//   console.log(a); 
// });

// Event.create("namespace3").listen("click",function(e){
// 	console.log(e)
// })


/**********************************************************/

// var getHelloWord=function() {
//     return "a" + "b";
// }

// var obj={
//     getHelloWord:getHelloWord
// }

// let key=Object.keys(obj);

// let name={};

// //get 当访问该属性时，该方法会被执行
// Object.defineProperty(name,key,{
//     get:typeof obj[key] === 'function' 
//     ? obj[key] 
//     : obj[key].get,
//     set:function(){}
// })

/**********************************************************/

//闭包
// var currying=function(fn){
//   var args=Array.prototype.slice.call(arguments,1);
//   return function(){
//     var newArgs=args.concat([].slice.call(arguments));
//     return fn.apply(null,newArgs);
//   }
// }
// //将函数作为参数传递
// var getWife=currying(function(){
//   var allWife=[].slice.call(arguments);
//   console.log(allWife.join(";"))
// },"hefa-wife")

// getWife("大老婆","小老婆","俏老婆","刁蛮老婆","乖老婆","送上门老婆");

// // 换一批老婆
// getWife("超越韦小宝的老婆");

function Promise(fn) {
  console.log(fn)
  var state = 'pending',
      value = null,
      callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

  this.then = function (onFulfilled,onRejected) {
    return new Promise(function(resolve,reject) {
        handle({
            onFulfilled: onFulfilled || null,
            onRejected: onRejected || null,
            resolve: resolve,
            reject: reject
        });
    });
  };

  function handle(callback){
    if (state === 'pending') {
        callbacks.push(callback);
        return ;
    }

    var cb = state === 'fulfilled' ? callback.onFulfilled : callback.onRejected,
        ret;
    if (cb === null) {
        cb = state === 'fulfilled' ? callback.resolve : callback.reject;
        cb(value);
        return;
    }
    try {
        ret = cb(value);
        callback.resolve(ret);
    } catch (e) {
        callback.reject(e);
    } 

  }

  function resolve(newValue) {
    // if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
    //     var then = newValue.then;
    //     if (typeof then === 'function') {
    //         then.call(newValue, resolve);
    //         return;
    //     }
    // }
    value = newValue;
    state = 'fulfilled';
    execute();
  }

  function reject(reason) {
      state = 'rejected';
      value = reason;
      execute();
  }

  function execute() {
      setTimeout(function () {
          callbacks.forEach(function (callback) {
              handle(callback);
          });
      }, 0);
  }

  fn(resolve, reject);
}

//例1
function getUserId() {
  return new Promise(function(resolve) {
      //异步请求
      setTimeout(function(){
        resolve(123);
      },0)
  });
}


// 例2
//let a=getUserId();
// a.then(function(id) {
//   // 一些处理
//   console.log(id)
// })

function Person(fn){
    var state = 'pending',
        value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

    this.then=function(onFulfilled){
        handle({
            onFulfilled:onFulfilled || null
        })
    }

    function handle(callback){
        if(state==="pending"){
            callbacks.push(callback);
            return ;
        }

        if(state==="fulfilled"){
            callback.onFulfilled(value);
        }

    }

    function resolve(newValue) {
        value=newValue;
        state='fulfilled';
        
        execute();
    }

    function execute(){
        setTimeout(function(){
            callbacks.forEach(function(itemFun){
                handle(itemFun);
            })
        },3);
    }

    fn(resolve);
}

let p=new Person(function(resolve){
    setTimeout(function(){
        resolve('settimeout');
    },0);
});

p.then(function(name){
    console.log(name)
});