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

// function Promise(fn) {
//   var state = 'pending',
//       value = null,
//       callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

//   this.then = function (onFulfilled,onRejected) {
//     return new Promise(function(resolve,reject) {
//         handle({
//             onFulfilled: onFulfilled || null,
//             onRejected: onRejected || null,
//             resolve: resolve,
//             reject: reject
//         });
//     });
//   };

//   function handle(callback){
//     if (state === 'pending') {
//         callbacks.push(callback);
//         return ;
//     }

//     var cb = state === 'fulfilled' ? callback.onFulfilled : callback.onRejected,
//         ret;
//     if (cb === null) {
//         cb = state === 'fulfilled' ? callback.resolve : callback.reject;
//         cb(value);
//         return;
//     }
//     try {
//         ret = cb(value);
//         callback.resolve(ret);
//     } catch (e) {
//         callback.reject(e);
//     } 

//   }

//   function resolve(newValue) {
//     if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
//         var then = newValue.then;
//         if (typeof then === 'function') {
//             then.call(newValue, resolve);
//             return;
//         }
//     }
//     value = newValue;
//     state = 'fulfilled';
//     execute();
//   }

//   function reject(reason) {
//       state = 'rejected';
//       value = reason;
//       execute();
//   }

//   function execute() {
//       setTimeout(function () {
//           callbacks.forEach(function (callback) {
//               handle(callback);
//           });
//       }, 0);
//   }

//   fn(resolve, reject);
// }

// //例1
// function getUserId() {
//   return new Promise(function(resolve) {
//       //异步请求
//       setTimeout(function(){
//         resolve(123);
//       },0)
//   });
// }

// let a=getUserId();
// a.then(getUserId);

/**********************************************************/

// var PENDING = 0;
// var FULFILLED = 1;
// var REJECTED = 2;

// function Person(fn){
//     var state = PENDING,
//         value = null,
//         callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

//     this.then=function(onFulfilled,onRejected){
//         return new Person(function(resolve,reject){
//             handle({
//                 onFulfilled:onFulfilled || null,
//                 onRejected:onRejected || null,
//                 resolve:resolve,
//                 reject:reject
//             });
//         })
//     }

//     function handle(callback){
//         if(state===PENDING){
//             callbacks.push(callback);
//             return ;
//         }

//         if(state===FULFILLED){
//             if (typeof callback.onFulfilled === 'function') {
//                 try {
//                     let ret=callback.onFulfilled(value);
//                     if(ret){
//                         callback.resolve(ret);
//                     }
//                 } catch (ex) {
//                     callback.reject(ex);
//                 }
//             } else {
//                 return callback.resolve(value);
//             }
//         }

//         if(state===REJECTED){
//             if (typeof callback.onRejected === 'function') {
//                 try {
//                     callback.resolve(callback.onRejected(value));
//                 } catch (ex) {
//                     callback.reject(ex);
//                 }
//             } else {
//                 return callback.reject(value);
//             }
//         }
//     }

//     function resolve(newValue) {
//         var t = typeof newValue;
//         if (newValue && (t === 'object' || t === 'function')) {
//             var then = newValue.then;
//             if (typeof then === 'function') {
//                 then.bind(newValue)(resolve);
//                 return then;
//             }
//         }

//         value=newValue;
//         state=FULFILLED;

//         execute();
//     }

//     function reject(error) {
//         value=error;
//         state=REJECTED;

//         execute();
//     }

//     function execute(){
//         setTimeout(function(){
//             callbacks.forEach(function(itemFun){
//                 handle(itemFun);
//             })
//         },3);
//     }

//     fn(resolve,reject);
// }

// let p=function(){
//     return new Person(function(resolve,reject){
//         //异步模块处理
//         setTimeout(function(){
//             resolve('settimeout');
//         },0);
//     })
// };

// p().then(function(name){
//     console.log(name);
// })

// var thunkify = function(fn){
//     return function(){
//       var args = new Array(arguments.length);
//       var ctx = this;

//       for(var i = 0; i < args.length; ++i) {
//         args[i] = arguments[i];
//       }

//       return function(done){
//         var called;

//         args.push(function(){
//           if (called) return;
//           called = true;

//           done.apply(null, arguments);
//         });
//         try {
//           fn.apply(ctx, args);
//         } catch (err) {
//           done(err);
//         }
//       }


//     }
//   };

//   function f(a, b, callback){
//     var sum = a + b;
//     callback(sum);
//     callback(sum);
//   }

//   var ft = thunkify(f);
//   ft(1, 2)(console.log); 



// var box3=document.getElementById("box3");

// document.getElementById('count').addEventListener("click",function(){

//   Promise.resolve().then(()=>{
//     console.log('mic1')
//   })
//   console.log('lis 1')

// })

// document.getElementById('count').addEventListener("click",function(){

//   Promise.resolve().then(()=>{
//     console.log('mic2')
//   })
//   console.log('lis 2')

// })

// document.getElementById('count').click();

// var count=0;
// var width=document.documentElement.clientWidth-50;

// function moveBox1ForwradOnePixel(el){
//   if(count>width){
//     count=0;
//   }
//   el.style.left= ++count+'px';
// }

// function callback1(){
//   moveBox1ForwradOnePixel(document.getElementById("box1"));
//   requestAnimationFrame(callback1);
// }

// //callback1();

// function callback2(){
//   moveBox1ForwradOnePixel(document.getElementById("box2"));
//   setTimeout(callback2,1000/60)
// }

// //callback2();



// var box=document.getElementById("box");

// box.addEventListener("click",function(){
//   console.log('timer1')
//   Promise.resolve().then(function () {
//     console.log('promise1')
//   })
// })

// box.addEventListener("click",function(){
//   console.log('timer2')
//   Promise.resolve().then(function () {
//     console.log('promise2')
//   })
// })


// let arrayList=[3,5,2,1];

// /**
//  * @param {Array} 冒泡
//  * */
// function bubbleSort(arr) {
//     var len = arr.length;   
//     for (var i = 0; i < len - 1; i++) {   
//         for (var j = 0; j < len - 1 - i; j++) {   
//             console.log(arr)
//             if (arr[j] > arr[j+1]) {        // 相邻元素两两对比   
//                 var temp = arr[j+1];        // 元素交换   
//                 arr[j+1] = arr[j];   
//                 arr[j] = temp;   
//             }   
//         }   
//     }   
//     return arr; 
// }

// /**
//  * @param {Array} 选择
//  **/
// function selectionSort(list) {
//     var len=list.length;
//     var minIndex,temp;
//     for(var i=0;i<len-1;i++){
//         minIndex=i;
//         for(var j=i+1;j<len;j++){
//             if(list[j]<list[minIndex]){
//                 minIndex=j;
//             }
//         }
//         console.log(list,list[minIndex])
//         temp=list[i];
//         list[i]=list[minIndex];
//         list[minIndex]=temp;
//     }
//     return list;
// }

// function selectionSort(list) {
//     var len = list.length;   
//     var minIndex,temp;
//     for (var i = 0; i < len - 1; i++) {   
//         minIndex=i;
//         for (var j = 0; j < len; j++) {   
//             if(list[j]<list[minIndex]){
//                 minIndex=j;
//             }
//             console.log(list,minIndex)
//         }         
//         var temp = list[i];        
//         list[i] = list[minIndex];   
//         list[minIndex] = temp;   

//     }   
//     return list; 
// }

// /**
//  * @param {Array} 选择
//  **/
// function insertionSort(list) {
//     var len = list.length;   
//     var prevIndex,
//         current;
//     for (var i = 1; i < len; i++) {   
//         prevIndex=i-1;
//         current=list[i];

//         while(prevIndex>=0 && list[prevIndex] > current){
//             console.log(list)
//             list[prevIndex+1]=list[prevIndex];
//             prevIndex--;
//         }
//         list[prevIndex+1]=current;

//     }   
//     return list; 
// }


// console.log(selectionSort(arrayList))


// var Duck=function(){}

// Duck.prototype.sound=function(){
//     console.log('嘎嘎嘎')
// }
// var Chicken=function(){}

// Chicken.prototype.sound=function(){
//     console.log('嘎嘎嘎')
// }

// var sounds=[];

// var makeSounds=function(ins){
//     if('sound' in ins){
//         ins.sound();
//         sounds.push(ins);
//     }
// }

// makeSounds(new Duck());

// makeSounds(new Chicken());


// Function.prototype.bind = function () {//实现了函数柯里化
//     var self = this, 
//         context = [].shift.call(arguments),
//         args = [].slice.call(arguments); 
//     return function () { 
//         return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
//     }
// };

// var obj = {
//     name: 'sven'
// };
// var name="window";
// var func = function (a, b, c, d) {
//     console.log(this.name); // 输出:sven
//     console.log([a, b, c, d]) // 输出:[ 1, 2, 3, 4 ]
// }.bind(null, 1, 2); 

// func(3, 4);



// Function.prototype.before=function(fn){
//     let beforefun=fn;  //before
//     let self=this; //保存原函数
//     return function(){
//         beforefun.apply(this,arguments);
//         return self.apply(this,arguments);
//     }
// }

// Function.prototype.after=function(fn){
//     let self=this;
//     let afterfun=fn;
//     return function(){
//         let ret=self.apply(this,arguments);
//         afterfun.apply(this,arguments);
//         return ret;
//     }
// }

// var func = function () {
//     console.log(2);
// };

// func = func.before(function () {
//     console.log(1);
// }).after(function () {
//     console.log(3);
// }); 

// func();

// function curry(fn) {
//     var args = Array.prototype.slice.call(arguments, 1);
//     return function () {
//         var innerArgs = Array.prototype.slice.call(arguments);
//         var finalArgs = args.concat(innerArgs);
//         return fn.apply(null, finalArgs);
//     };
// }

// function add(num1, num2){
//     return num1 + num2;
// }
// var curriedAdd = curry(add, 5,6,7);
// alert(curriedAdd(3));   //8

// function Person(name){
//     this.name=name;
// }

// Person.prototype.sayName=function(){
//     console.log(this.name)
// }

// let getSingle=function(fn){
//     let instance;
//     return function(){
//         return instance=fn.apply(this,arguments);
//     }
// }

// let p=new Person('test');
// let res=getSingle(p.sayName);
// res();

// let Hua=function(){}

// let xiaoming={
//     songhua:function(target){
//         let hua=new Hua();
//         target.receive(hua)
//     }
// }

// let B={
//     receive:function(hua){
//         A.listen(function(){
//             A.receive(hua);
//         })
//     }
// }

// let A={
//     listen:function(fn){
//         setTimeout(fn,10000);
//     },
//     receive:function(hua){
//         console.log("收到花")
//     }
// }

// xiaoming.songhua(B);

// let myImage=(function(){
//     let img=document.createElement('img');
//     document.body.appendChild(img);
//     return {
//         setImage:function(src){
//             img.src=src;
//         }
//     }
// })();

// let proxyImage=(function(){
//     let img= new Image();
//     img.onload=function(){
//         myImage.setImage(this.src);
//     }
//     return {
//         setImage:function(src){
//             myImage.setImage('./test.jpeg');
//             img.src=src;
//         }
//     }
// })();

// proxyImage.setImage('http://p2.music.126.net/Jv78zFs7VIQgka5QWoQk9Q==/109951163919513453.jpg?param=140y140')


// Function.prototype.before=function(fn){
//     let _self=this;//保存原函数引用
//     let beforefn=fn;
//     return function(){
//         beforefn.apply(this,arguments);
//         return _self.apply(this,arguments);
//     }
// };

// Function.prototype.after=function(fn){
//     let _self=this;
//     let afterfn=fn;
//     return function(){
//         let _ret=_self.apply(this,arguments);
//         afterfn.apply(this,arguments);
//         return _ret;
//     }
// }



// var button = document.getElementById('count');

// button.onclick=(function(){
//     console.log('触发函数')
// }).after(function(){
//     console.log('上报数据')
// })

/*
let event={
    clients:[],
    offlineStack:[],
    listen:function(key,fn){
        let _self=this;
        if(!this.clients[key]){
            this.clients[key]=[];
        }

        this.clients[key].push(fn);

        if(_self.offlineStack[key]){
            _self.offlineStack[key].forEach(function(item,index){
                item.apply(fn,arguments);
            })
            delete _self.offlineStack[key];
        }

        
    },
    remove:function(key,fn){
        let fns=this.clients[key];
        if(!fns){
            return false;
        } else {
            fns.forEach(function(item,key,array){
                if(fn===item){
                    fns.splice(key,1);
                }
            })
        }
    },
    trigger:function(){
        let _self=this;
        let args=arguments;
        let key=Array.prototype.shift.call(arguments);
        let fns=this.clients[key];

        if((!fns || fns.length==0) && _self.offlineStack){
            if(!_self.offlineStack[key]){
                _self.offlineStack[key]=[];
            }
            _self.offlineStack[key].push(function(item){
                 this.apply(_self,args);
            });
        }

        if(!fns || fns.length==0){
            return false;
        }

        fns.forEach(function(item,key,array){
            item.apply(this,args);
        })
    }
};

var salesOffices={};

var installEvent=function(obj){
    for(let i in event){
        obj[i]=event[i];
    }
}
installEvent(salesOffices);


salesOffices.trigger('140',1400000);

let fn1=function(price){
    console.log("fn1-价格",price);
};

salesOffices.listen('88',fn1);

let fn3=function(price){
    console.log("fn3-价格",price);
};

salesOffices.listen('88',fn3);

salesOffices.trigger('88',880000);

salesOffices.listen('140',fn3);

*/

let Event=(function(){
    let _shift=Array.prototype.shift,
        _unshift=Array.prototype.unshift,
        namespaceCache={},
        each=function(stack,fn){
            stack.forEach((item,index) => {
                fn.apply(item,arguments)
            });
        };

    let _create=function(){
        let namespace=_shift.call(arguments) || 'defaultNameSpace',
            clientsCache=[];

        let ret={
            trigger:function(){
                let args=arguments;
                let key=_shift.call(arguments),
                    fns=clientsCache[key];
                if(!fns || fns.length===0){
                    return ;
                }
                each(fns,function(){
                    this.apply(this,args);
                })
                // fns.forEach(element => {
                //     element.apply(this,arguments);
                // });
            },
            listen:function(){
                let key=_shift.call(arguments);
                fn=_shift.call(arguments);
                if(!clientsCache[key]){
                    clientsCache[key]=[];
                }
                clientsCache[key].push(fn);
            },
            remove:function(){
                let key=_shift.call(arguments);
                let fn=_shift.call(arguments);
                let fns=clientsCache[key];
                if(!clientsCache[key]){
                    return ;
                } else {
                    each(fns,function(item,index){
                        if(item===fn){
                            fns.splice(index,1);
                        }
                    });
                    // fns.forEach((item,index) => {
                    //     if(item===fn){
                    //         fns.splice(index,1);
                    //     }
                    // });
                }
            }
        }

        return namespaceCache[namespace]?namespaceCache[namespace]:namespaceCache[namespace]=ret;

    }

    return {
        create:_create,
        trigger:function(){
            var event=this.create();
            return event.trigger.apply(this,arguments);
        },
        listen:function(){
            var event=this.create();
            return event.listen.apply(this,arguments);
        },
        remove:function(){
            var event=this.create();
            return event.remove.apply(this,arguments);
        }
    }

})();

let n1='namespace1',n2='namespace2';

Event.create(n1).listen("click",fn1=function(data){
    console.log(data,arguments.callee.name);
});

Event.create(n1).listen("click",fn2=function(data){
    console.log(data,arguments.callee.name);
});

Event.create(n1).listen("click",fn3=function(data){
    console.log(data,arguments.callee.name);
});

Event.create(n1).listen("click",fn4=function(data){
    console.log(data,arguments.callee.name);
});

Event.create(n1).remove("click",fn2);


Event.create(n1).trigger("click",1);

Event.create(n1).listen("click",fn3=function(data){
    console.log(data,arguments.callee.name);
});

Event.create(n2).listen("click",fn5=function(data){
    console.log(data,arguments.callee.name);
});

Event.create(n2).trigger("click",2);

Event.listen('click',fn6=function(data){
    console.log(data,arguments.callee.name);
})
Event.listen('click',fn7=function(data){
    console.log(data,arguments.callee.name);
})
Event.listen('click',fn8=function(data){
    console.log(data,arguments.callee.name);
})
Event.remove("click",fn8)
Event.trigger("click",'customer')



/* 
var Event = (function () {
    var _listen,
        _trigger,
        _remove,
        _shift = Array.prototype.shift,
        _unshift = Array.prototype.unshift,
        namespaceCache = {},
        _create,
        each = function (ary, fn) {
            var ret;
            for (var i = 0, l = ary.length; i < l; i++) {
                var n = ary[i];
                ret = fn.call(n, i);
            }
            return ret;
        };

    _listen = function (key, fn, cache) {//订阅的消息添加到缓存列表
        //cache缓存订阅消息
        if (!cache[key]) {
            cache[key] = [];
        }
        cache[key].push(fn);
    };

    _remove = function (key, cache, fn) {//取消订阅事件
        if (cache[key]) {
            if (fn) {
                for (var i = cache[key].length; i >= 0; i--) {
                    if (cache[key][i] === fn) {
                        cache[key].splice[i, 1];
                    }
                }
            } else {
                cache[key] = [];
            }
        }
    };

    _trigger = function () {//发布消息
        var cache = _shift.call(arguments),//拿到缓存的订阅消息列表
            key = _shift.call(arguments),//发布的消息名称
            args = arguments,
            _self = this,
            stack = cache[key];//从缓存的订阅消息列表拿到当前发布的消息列表
        //发布的消息没有订阅
        if (!stack || !stack.length) {
            return;
        }
        //执行发布后对应的订阅消息
        return each(stack, function () {
            return this.apply(_self, args);
        });
    };

    _create = function (namespace) {
        var namespace = namespace || 'default';
        var cache = {},
            offlineStack = [],
            ret = {
                listen: function (key, fn, last) {
                    _listen(key, fn, cache);
                    //离线的发布信息，未被订阅
                    if (offlineStack === null) {
                        return;
                    }

                    if (last === 'last') {
                        offlineStack.length && offlineStack.pop()();
                    } else {
                        each(offlineStack, function () {
                            this();
                        });
                    }

                    offlineStack = null;
                },
                one: function (key, fn, last) {
                    _remove(key, cache);
                    this.listen(key, fn, last);
                },
                remove: function (key, fn) {
                    _remove(key, cache, fn);
                },
                trigger: function () {
                    //发布消息
                    var fn,
                        args,
                        _self = this;
                    _unshift.call(arguments, cache); //缓存的订阅消息列表合并到参数里
                    //新的参数
                    args = arguments;
                    //发布消息
                    fn = function () {
                        return _trigger.apply(_self, args);
                    };
                    //是否有离线的发布消息
                    if (offlineStack) {
                        return offlineStack.push(fn);
                    }
                    //执行发布消息
                    return fn();
                }
            };

        return namespace ?
            (namespaceCache[namespace] ? namespaceCache[namespace] : namespaceCache[namespace] = ret)
            : ret;
    };

    return {
        create: _create,
        one: function (key, fn, last) {
            var event = this.create();
            event.one(key, fn, last);
        },
        remove: function (key, fn) {
            var event = this.create();
            event.remove(key, fn);
        },
        listen: function (key, fn, last) {
            //创建
            var event = this.create();
            event.listen(key, fn, last);
        },
        trigger: function () {
            var event = this.create();
            event.trigger.apply(this, arguments);
        }
    };

})();
*/





