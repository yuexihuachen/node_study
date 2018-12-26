// components/index/contentItem/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerList: {
      type: Array,
      value: []
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
  },
  relations: {
    '../content/index': {
      type: 'parent', // 关联的目标节点应为父节点
      linked: function (target) {
        console.log("item-relations-linked:", target)
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
      },
      linkChanged: function (target) {
        console.log("item-relations-linkChanged:", target)
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function (target) {
        console.log("item-relations-unlinked:", target)
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
