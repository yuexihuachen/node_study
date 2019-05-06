
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var num=3;


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'hello vue',
    classname:'test',
    seen:true,
    need:false,
    isActive:true,
    error: null,
    selected:'',
    href:"class.hujiang.com",
    foo:'rwsf',
    referHtml:'<div>html</div>',
    obj:{
      name:'test'
    },
    todos: [
      { index:0,text: '学习 JavaScript' },
      { index:1,text: '学习 Vue' },
      { index:2,text: '整个牛项目' }
    ],
  },
  computed: {
    reversedMessage:{
      get:function(){
        return this.message.split('').reverse().join('');
      },
      set:function(newVal){
        this.message=newVal+'set';
      }
    },
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },
  methods:{
    addmes:function(){
      app2.todos.push({
        index:app2.todos.length+1,
        text:app2.message
      })
    },
    onMessage:function(){
      app2.todos.push({ index:num++,text: '新项目' })
    },
    doSomething:function(){

    },
    onSubmit:function(){
      console.log(this)
    }
  }
});



var mult = (function () {
  var cache = {};

  var calculate = function () { // 封闭 calculate 函数
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i];
    }
    return a;
  };


  return function () {
    var args = Array.prototype.join.call(arguments, ','); 
    if (args in cache) {
      return cache[args];
    }
    return cache[args] = calculate.apply(null, arguments);
  }
})();


Function.prototype.before = function (beforefn) {
  var __self = this; // 保存原函数的引用
  return function () { // 返回包含了原函数和新函数的"代理"函数
    beforefn.apply(this, arguments); 
    return __self.apply(this, arguments);
  }
};

Function.prototype.after = function (afterfn) {
  var __self = this;
  return function () {
    // 执行新函数，修正 this // 执行原函数
    var ret = __self.apply(this, arguments); 
    afterfn.apply(this, arguments);
   // return ret;
  }
};

var func = function () {
  console.log(2);
};

func = func.before(function(){
  console.log(1);
}).after(function(){
  console.log(3);
}); 

func();

// function bind(){
//   var args=[].shift.call(arguments);
//   var self=this;
//   return function(){
//     return self.apply(this,[].concat.call(args,arguments));
//   }
// }

// var obj={
//   name:'test'
// }

// var test=function(){
//   console.log(this.name);
//   console.log(arguments)
// }

// test.bind(obj)(1,2);

window.color = "red";
var o = { color: "blue" };
function sayColor(){
    console.log(this.color);
    console.log(arguments)
}
var objectSayColor = sayColor.bind(o,1,2,3,4);
objectSayColor();    //blue