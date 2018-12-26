/**
 * behaviors 是用于组件间代码共享的特性
*/
module.exports = Behavior({
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log("lifetimes-attached:",this);
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log("lifetimes-detached:", this);
    },
    ready() {
      //在组件在视图层布局完成后执行
      console.log("lifetimes-ready:", this);
    }
  },
  pageLifetimes: {
    show: function () {
      // 页面被展示
      console.log("pageLifetimes-show:", this);
    },
    hide: function () {
      // 页面被隐藏
      console.log("pageLifetimes-hide:", this);
    },
    resize: function (size) {
      // 页面尺寸变化
      console.log("pageLifetimes-resize:", this);
    }
  },
  properties: {
    
  },
  data: {
    name: 'Behavior:头部'
  },
  attached: function () {

  },
  methods: {
    myBehaviorMethod: function () { }
  }
})