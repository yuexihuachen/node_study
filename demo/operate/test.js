function log(){
    console.log.apply(this,arguments)
}


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

//   _listen = function (key, fn, cache) {//????????????????????????????????????
//     //cache??????????????????
//     if (!cache[key]) {
//       cache[key] = [];
//     }
//     cache[key].push(fn);
//   };

//   _remove = function (key, cache, fn) {//??????????????????
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

//   _trigger = function () {//????????????
//     var cache = _shift.call(arguments),//?????????????????????????????????
//       key = _shift.call(arguments),//?????????????????????
//       args = arguments,
//       _self = this,
//       stack = cache[key];//???????????????????????????????????????????????????????????????
//     //???????????????????????????
//     if (!stack || !stack.length) {
//       return;
//     }
//     //????????????????????????????????????
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
//           //????????????????????????????????????
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
//           //????????????
//           var fn,
//             args,
//             _self = this;
//           _unshift.call(arguments, cache); //?????????????????????????????????????????????
//           //????????????
//           args = arguments;
//           //????????????
//           fn = function () {
//             return _trigger.apply(_self, args);
//           };
//           //??????????????????????????????
//           if (offlineStack) {
//             return offlineStack.push(fn);
//           }
//           //??????????????????
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
//       //??????
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

// //get ?????????????????????????????????????????????
// Object.defineProperty(name,key,{
//     get:typeof obj[key] === 'function' 
//     ? obj[key] 
//     : obj[key].get,
//     set:function(){}
// })

/**********************************************************/

//??????
// var currying=function(fn){
//   var args=Array.prototype.slice.call(arguments,1);
//   return function(){
//     var newArgs=args.concat([].slice.call(arguments));
//     return fn.apply(null,newArgs);
//   }
// }
// //???????????????????????????
// var getWife=currying(function(){
//   var allWife=[].slice.call(arguments);
//   console.log(allWife.join(";"))
// },"hefa-wife")

// getWife("?????????","?????????","?????????","????????????","?????????","???????????????");

// // ???????????????
// getWife("????????????????????????");

// function Promise(fn) {
//   var state = 'pending',
//       value = null,
//       callbacks = [];  //callbacks????????????????????????????????????????????????

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

// //???1
// function getUserId() {
//   return new Promise(function(resolve) {
//       //????????????
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
//         callbacks = [];  //callbacks????????????????????????????????????????????????

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
//         //??????????????????
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
//  * @param {Array} ??????
//  * */
// function bubbleSort(arr) {
//     var len = arr.length;   
//     for (var i = 0; i < len - 1; i++) {   
//         for (var j = 0; j < len - 1 - i; j++) {   
//             console.log(arr)
//             if (arr[j] > arr[j+1]) {        // ????????????????????????   
//                 var temp = arr[j+1];        // ????????????   
//                 arr[j+1] = arr[j];   
//                 arr[j] = temp;   
//             }   
//         }   
//     }   
//     return arr; 
// }

// /**
//  * @param {Array} ??????
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
//  * @param {Array} ??????
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
//     console.log('?????????')
// }
// var Chicken=function(){}

// Chicken.prototype.sound=function(){
//     console.log('?????????')
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


// Function.prototype.bind = function () {//????????????????????????
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
//     console.log(this.name); // ??????:sven
//     console.log([a, b, c, d]) // ??????:[ 1, 2, 3, 4 ]
// }.bind(null, 1, 2); 

// func(3, 4);



// Function.prototype.before=function(fn){
//     let beforefun=fn;  //before
//     let self=this; //???????????????
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
//         console.log("?????????")
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
//     let _self=this;//?????????????????????
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
//     console.log('????????????')
// }).after(function(){
//     console.log('????????????')
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
    console.log("fn1-??????",price);
};

salesOffices.listen('88',fn1);

let fn3=function(price){
    console.log("fn3-??????",price);
};

salesOffices.listen('88',fn3);

salesOffices.trigger('88',880000);

salesOffices.listen('140',fn3);

*/

// let Event=(function(){
//     let _shift=Array.prototype.shift,
//         _unshift=Array.prototype.unshift,
//         _slice=Array.prototype.slice,
//         _trigger,_listen,_remove,
//         namespaceCache={},
//         each=function(stack,fn){
//             stack.forEach((item,index) => {
//                 fn.apply(item,arguments)
//             });
//         };

//         _trigger=function(key,value,fns){
//             if(!fns || fns.length===0){
//                 return ;
//             }
//             each(fns,function(){
//                 this.call(this,value);
//             })
//         };
//         _listen=function(key,fn,clientsCache){
//             if(!clientsCache[key]){
//                 clientsCache[key]=[];
//             }
//             clientsCache[key].push(fn);
//         };
//         _remove=function(key,fn,fns,clientsCache){
//             if(!clientsCache[key]){
//                 return ;
//             } else {
//                 each(fns,function(item,index){
//                     if(item===fn){
//                         fns.splice(index,1);
//                     }
//                 });
//             }
//         };


//     let _create=function(){
//         let namespace=_shift.call(arguments) || 'defaultNameSpace',
//             clientsCache=[],
//             offlineStack=[];

//         let ret={
//             trigger:function(){
//                 let key=_shift.call(arguments);
//                     fns=clientsCache[key];
//                     value=_shift.call(arguments);
                
//                 if(!fns || fns.length===0){

//                     if(!offlineStack[key]){
//                         offlineStack[key]=[];
//                     }
//                     offlineStack[key].push(function(){
//                         _trigger.apply(this,arguments);
//                     });
//                     return ;
//                 }

//                 return _trigger.call(this,key,value,fns);
//             },
//             listen:function(){
//                 let key=_shift.call(arguments);
//                     fn=_shift.call(arguments);
//                 _listen.call(this,key,fn,clientsCache);
//                 if(offlineStack[key]){
//                     offlineStack[key][0].call(this,key,value,clientsCache[key]);
//                     delete offlineStack[key];
//                 }
//             },
//             remove:function(){
//                 let key=_shift.call(arguments),
//                     fn=_shift.call(arguments),
//                     fns=clientsCache[key];
//                 _remove.call(this,key,fn,fns,clientsCache);
//             }
//         }

//         return namespaceCache[namespace]?namespaceCache[namespace]:namespaceCache[namespace]=ret;

//     }

//     return {
//         create:_create,
//         trigger:function(){
//             var event=this.create();
//             return event.trigger.apply(this,arguments);
//         },
//         listen:function(){
//             var event=this.create();
//             return event.listen.apply(this,arguments);
//         },
//         remove:function(){
//             var event=this.create();
//             return event.remove.apply(this,arguments);
//         }
//     }

// })();

// let n1='namespace1',n2='namespace2',n3='namespace3',n4='namespace4';

// Event.create(n1).listen("click",fn1=function(data){
//     console.log(data,arguments.callee.name);
// });

// Event.create(n1).listen("click",fn2=function(data){
//     console.log(data,arguments.callee.name);
// });

// Event.create(n1).listen("click",fn3=function(data){
//     console.log(data,arguments.callee.name);
// });

// Event.create(n1).listen("click",fn4=function(data){
//     console.log(data,arguments.callee.name);
// });


// Event.create(n1).trigger("click",1);

// Event.create(n1).listen("click",fn3=function(data){
//     console.log(data,arguments.callee.name);
// });

// Event.create(n2).listen("click",fn5=function(data){
//     console.log(data,arguments.callee.name);
// });

// Event.create(n2).trigger("click",2);

// Event.listen('click',fn6=function(data){
//     console.log(data,arguments.callee.name);
// })
// Event.listen('click',fn7=function(data){
//     console.log(data,arguments.callee.name);
// })
// Event.listen('click',fn8=function(data){
//     console.log(data,arguments.callee.name);
// })
// Event.remove("click",fn8)
// Event.trigger("click",'customer')

// Event.create(n3).trigger("click",435);

// Event.create(n3).listen("click",fn9=function(data){
//     console.log(data,arguments.callee.name);
// });
// Event.create(n4).trigger("click",666);
// Event.create(n4).listen("click",fn9=function(data){
//     console.log(data,arguments.callee.name);
// });


/** 
 * 
 * ????????????
*/
// var btn=document.getElementById("count");
// btn.onclick=function(){
//     throw 'whoops';
//   console.log('click')
// }

// function Player(name,teamColor){
//     this.duiyou=[];
//     this.diren=[];
//     this.state='live';
//     this.name=name;
//     this.teamColor=teamColor;
// }

// Player.prototype.win=function(){
//     console.log('win ',this.name);
// }

// Player.prototype.lose=function(){
//     console.log('lose ',this.name);
// }

// Player.prototype.die=function(){
//     this.state='die';
//     playerDirector.playerDead(this);
// }

// let createFactory=function(name,teamColor){
//     let p=new Player(name,teamColor);
//     playerDirector.addPlayer(p);
//     return p;  
// }

// let playerDirector={
//     players:[],
//     addPlayer:function(p){
//         this.players.forEach(function(item,index){
//             if(p.teamColor===item.teamColor){
//                 item.duiyou.push(p);
//                 p.duiyou.push(item);
//             } else {
//                 item.diren.push(p);
//                 p.diren.push(item);
//             }
//         });
//         this.players.push(p);
//     },
//     playerDead:function(p){
//         let all_die=true;
//         p.duiyou.forEach(function(item,index){
//             if(item.state==='live'){
//                 all_die=false;
//             }
//         });
//         if(all_die){
//             p.lose();
//             p.duiyou.forEach(function(item,index){
//                 item.lose();
//             });
//             p.diren.forEach(function(item,index){
//                 item.win();
//             });
//         }
    
//     }
// }

// let p1=createFactory('1','red')
// let p2=createFactory('2','red')
// let p3=createFactory('3','red')

// let p4=createFactory('4','black')
// let p5=createFactory('5','black')
// let p6=createFactory('6','black')


//Iterator
// let Iterator=function(list){
//     let index=0;
//     return {
//         next:function(){
//             return index<list.length?
//             {value:list[index++],done:false}:
//             {done:true};
//         }
//     }
// };

// let c1=Iterator([1,2,3]);

// let c2=Iterator([1,2,3]);

// let compare=function(){
//     let c1next=c1.next();
//     let c2next=c2.next();
//     while(!c1next.done && !c2next.done){
//         if(c1next.value!==c2next.value){
//             throw new Error('c1 c2?????????');
//         }
//         c1next=c1.next();
//         c2next=c2.next();
//     }
// }
// compare();



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

// function baz(z){
//     log(new Error().stack);
// }

// function bar(y){
//     baz(y+1);
// }

// function foo(x){
//     bar(x+1);
// }

// foo(3);

//return 

// let q=document.getElementById('box-qiu');
// let iyi=5;

// let fun=function(e){
//     let initPos={left:q.offsetLeft,top:q.offsetTop};
//     switch(e.keyCode){
//         case 38:
//             initPos.top=initPos.top-iyi;
//         break;
//         case 40:
//             initPos.top=initPos.top+iyi;
//         break;
//         case 37:
//             initPos.left=initPos.left-iyi;
//         break;
//         case 39:
//             initPos.left=initPos.left+iyi;
//         break;
//     }
//     q.style.top=initPos.top+'px';
//     q.style.left=initPos.left+'px';
// }

// document.body.onkeydown=fun;




let verification={
    isEmptyFun:function(value,errorMsg){
        if(value===''){
            return errorMsg;
        }
    },
    strLengthFun:function(value,min,max,errorMsg){
        let strLength=value.length,maxFlag=true;
        if(isNaN(max)){
            errorMsg=max;
        } else {
            if(strLength>max){
                maxFlag=false;
            }
        }
        if(!(strLength>=min && maxFlag)){
            return errorMsg;
        }
    },
    isMobileFun:function(value,errorMsg){
        if(isNaN(value)){
            return errorMsg;
        }
    }
}


let Validator=function(){
    this.verifications=[];
}

Validator.prototype.add=function(dom,rules){
    let _self=this;
    rules.forEach((item) => {
        let rulesList=item.validName.split(':'),
            errorMsg=item.errorMsg;

        this.verifications.push(function(){
            let funName=rulesList.shift();
            rulesList.unshift(dom.value);
            rulesList.push(errorMsg);
            return verification[funName].apply(dom,rulesList);
        });
    });
}

Validator.prototype.start=function(){
    for (var i = 0, validatorFunc; validatorFunc = this.verifications[i++];) {
        var errorMsg = validatorFunc(); 
        if (errorMsg) {
            return errorMsg;
        }
    }
}

let validataFun=function(){
    let validator=new Validator();
    validator.add(submit.userName,[{
        validName:'isEmptyFun',
        errorMsg:'?????????????????????'
    },{
        validName:'strLengthFun:10',
        errorMsg:'?????????????????????10???'
    }]);

    validator.add(submit.password,[{
        validName:'isEmptyFun',
        errorMsg:'??????????????????'
    },{
        validName:'strLengthFun:6',
        errorMsg:'??????????????????6???'
    }]);

    validator.add(submit.phoneNumber,[{
        validName:'isEmptyFun',
        errorMsg:'????????????????????????'
    },{
        validName:'isMobileFun',
        errorMsg:'???????????????????????????'
    },{
        validName:'strLengthFun:8:14',
        errorMsg:'???????????????????????????'
    }]);

    var errorMsg = validator.start();

    return errorMsg;

}


submit.onsubmit=function(e){
    var validator = validataFun();
    console.log(validator)
}

//????????????  ?????? ?????? ?????? ?????????
let travelMode={
    "air":function(peopleNum){
        return peopleNum*2000;
    },
    "train":function(peopleNum){
        return peopleNum*600;
    },
    "bus":function(peopleNum){
        return peopleNum*300;
    },
    "bicycle":function(peopleNum){
        return peopleNum*100;
    }
};

//??????????????????
let travelReady=function(level,peopleNum){
    return travelMode[level](peopleNum);
};

//???????????????
console.log(travelReady('air',1)); 
//???????????????
console.log(travelReady('bus',1));

