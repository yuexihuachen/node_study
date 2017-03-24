var React = require('react');


class ProductComponent extends React.Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){
    var screenData={
        choiceData:this.props.resTabList,
        sortData:[
          {count:35,resKey:0},
          {count:35,resKey:4},
          {count:35,resKey:5},
          {count:35,resKey:1},
          {count:35,resKey:2}
        ]
      };

      screenData.choiceData.unshift({count:35,resKey:0});

      this.setState({
        choiceData:screenData.choiceData,
        sortData:screenData.sortData,
        choiceResourceData:0,
        choiceSortData:0,
      });
  }
  showAll(e){
    this.setState({
      showChoiceMask:e.currentTarget.dataset.showid,
      showContentMask:true
    })
  }
  handleClick(e) {
      var delegate=this.props.delegate,
      targetId=parseInt(e.currentTarget.dataset.cid,10),
      updateData={
        showContentMask:false,
        choiceResourceData:this.state.choiceResourceData,
        choiceSortData:this.state.choiceSortData
      };

      if(this.state.showChoiceMask==1){
          if(this.state.choiceResourceData!=targetId){
              delegate.initData({
                resType:[targetId]
              });
              updateData.choiceResourceData=targetId;
              this.setState(updateData);
          }
      } else {
          if(this.state.choiceSortData!=targetId){
              delegate.initData({
                sort:targetId
              });
              updateData.choiceSortData=targetId;
              this.setState(updateData);
          }
      }

      this.showMask();
  }
  showMask(){
    this.setState({
      showContentMask:false
    })
  }
  render(){
    var resourceTypeDesc=['不限','徒步向导','带车向导','包车接送','餐厅代订','门票代订','当地活动','民宿代订','当地特产'],
          sortTypeDesc=['综合排序','价格从低到高','价格从高到低','','销量从高到低','评价从多到少'];

    const data=this.state && (this.state.showChoiceMask==1?this.state.choiceData:this.state.sortData);
    const datalist= data && data.map((item,index)=>{
                  return <li key={index} className={
                                    this.state.showChoiceMask==1?
                                    (this.state.choiceResourceData==item.resKey?'cur':''):
                                    (this.state.choiceSortData==item.resKey?'cur':'')
                                  } data-cid={item.resKey} onClick={this.handleClick.bind(this)}>
                                <div className="ex_tit">
                                  {this.state.showChoiceMask==1?resourceTypeDesc[item.resKey]:sortTypeDesc[item.resKey]}
                                  {
                                    this.state.showChoiceMask==1?
                                    (this.state.choiceResourceData==item.resKey?<i className="choice"></i>:''):
                                    (this.state.choiceSortData==item.resKey?<i className="choice"></i>:'')
                                  }
                                </div>
                            </li>
                });
    return (
      <div>
        <div className="footer">
          <div className="footermenu">
            <div className="leftmenu" data-showid="1" onClick={this.showAll.bind(this)}>
              筛选
              {this.state && this.state.choiceResourceData!=0?<i className="dot"></i>:''}
            </div>
            <div className="rightmenu" data-showid="2"  onClick={this.showAll.bind(this)}>
              排序
              {this.state && this.state.choiceSortData!=0?<i className="dot"></i>:''}
            </div>
          </div>
        </div>
      <div className={`choiceSelect ${this.state && this.state.showContentMask? '' : 'hidden'}`}>
        <div className="mask" onClick={this.showMask.bind(this)}></div>
        <div className="choiceCon">
          <div className="choice_con_scroll">
            <ul className="ex_all">
              {datalist}
              </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

class ProductContentList extends React.Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){

  }
  toDetail(e){
    var target=e.currentTarget.dataset;
    window.location.href="./detail?id="+target.pid+'&poid='+target.poid+'&aid='+target.aid;
  }
  hasData(){
      var bookingdes=['徒步向导','带车向导','包车接送','餐厅代订','门票代订','当地活动','民宿代订','当地特产'];
      const data=this.props.goodsGroup.goodsList;
     return (
       <div className="cbody">     
         <div className="header">
            <div className="back"><div className="cback"></div></div>
            <div className="headcenter">首页</div>
            <div className="home">
              <div className="chometop"></div>
              <div className="chomecon"></div>
            </div>
         </div>
        <div className="content">
           {
               data.map((item,key)=>{
                 return <div className="proditem" key={key} data-aid={item.advisorId} data-pid={item.productId} data-poid={item.poid} onClick={this.toDetail.bind(this)}>
                   <div className="imgContent">
                      <img style={{width:'80px',height:'80px'}} src={item.imgUrl} alt="" />
                      <span className="icon">{bookingdes[item.resourceType-1]}</span>
                   </div>
                     <div className="rcon">
                        <div className="pname">{item.productName}</div>
                        <div className="price">
                            <span>￥{item.minPrice}</span>
                            <span className="em">起</span>
                            <span className="em">销量：{item.orderCount}</span>
                          </div>
                        <div className="name">
                            {item.guideName}
                           <span className="em">提供{bookingdes[item.resourceType-1]}</span>
                          </div>
                    </div>
                 </div>
               })
           }
        </div>
        
      </div>
     );
  }
  render() {
        return this.hasData();
  }
}


class Index extends React.Component{
    constructor(props){
      super(props);
  }
  componentDidMount(){

  }
  noData(){
    return (
      <div>没有更多数据了</div>
    )
  }
  render(){
      const data=this.props.goodsGroup.goodsList;
      if(data && data.length>0){
        return (
          <div>
             <ProductContentList {...this.props}/>
              <ProductComponent  {...this.props}/>
          </div>
        )
      } else {
        return this.noData();
      }
  }
}

module.exports = Index;


