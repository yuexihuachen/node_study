var React = require('react');

class Counter extends React.Component {
  handleClickDec(e){
    console.log('dec')
  }
  handleClickAdd(e){
    console.log('add')
  }
  toDetail(e){
    var target=e.currentTarget.dataset;
    window.location.href="./detail?id="+target.pid+'&poid='+target.poid+'&aid='+target.aid;
  }
  render() {
    //const data=this.props.product;
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
}

module.exports = Counter;


