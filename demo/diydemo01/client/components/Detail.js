var React = require('react');

class Counter extends React.Component {
  toBack(){;
    window.location.href="./";
  }
  render() {
    //const data=this.props.product;
     var bookingdes=['徒步向导','带车向导','包车接送','餐厅代订','门票代订','当地活动','民宿代订','当地特产'];
      const data=this.props.goodsGroup.goodsList[0];

     return (
       <div className="cbody">     

         <div className="header">
            <div className="back" onClick={this.toBack}> <div className="cback"></div></div>
            <div className="headcenter">产品详情页</div>
            <div className="home">
              <div className="chometop"></div>
              <div className="chomecon"></div>
            </div>
         </div>

        <div className="content">
              <div className="proditem">
                   <div className="imgContent">
                      <img src={data.imgUrl} alt="" />
                      <span className="icon">{bookingdes[data.resourceType-1]}</span>
                   </div>
                    
                     <div className="rcon">
                        <div className="pname">{data.productName}</div>
                        <div className="price">
                            <span>￥{data.minPrice}</span>
                            <span className="em">起</span>
                            <span className="em">销量：{data.orderCount}</span>
                          </div>
                        <div className="name">
                            {data.guideName}
                           <span className="em">提供{bookingdes[data.resourceType-1]}</span>
                          </div>
                    </div>
                 </div>
               
        </div>
      </div>
     );
  }
}

module.exports = Counter;


