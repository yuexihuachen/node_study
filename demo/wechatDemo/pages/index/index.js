const modelT=require('../../json/localdata.js');

Page({
  data:{
    model:{
      commonMaskToggle: 'hide',
      title:'兑换规则',
      content:'',
      btnName:'知道了',
      commonCss:'top:10%;'
    },
    header:{
      back:'返回',
      home:'主页'
    },
    isFixedBody:'',
    list: [1, 2, 3, 4, 5, 6],
    onelist:[6,5,4,3,2,1]
  },
  onReady: function () {

  },
  onUnload: function () {

  },
  onScroll(){
    let model = this.data.model;
    model.commonMaskToggle ='';
    model.content = modelT.mcon;
    this.setData({
      model,
      isFixedBody:'c-on'
    })
  },
  onHideScroll(){
    let model = this.data.model;
    model.commonMaskToggle = 'hide';
    this.setData({
      model,
      isFixedBody:''
    })
  },
  onParentClick(e){
    console.log(e,this)
  }
})
