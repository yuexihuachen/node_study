var myBehavior = require('../../../behaviors/index.js');

Component({
  behaviors: [myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    innerBack: {
      type: String,
      value: '组件返回'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    home:'组件主页'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick(e){
      console.log(e,this)
      wx.showToast({
        title: '1',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    },
    onChildClick(e){
      let detail=e.detail;
      let option={
        back:'back'
      }
      this.triggerEvent('onparentclick', detail, option)
    }
  }
})
