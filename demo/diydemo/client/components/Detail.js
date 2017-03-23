var React = require('react');

class Counter extends React.Component {
  handleClickDec(e){
    console.log('dec')
  }
  handleClickAdd(e){
    console.log('add')
  }
  toBack(){
    window.location.href="./";
  }
  render() {
    const data=this.props.product;
     return (
       <div className="cbody">     
         <div className="header">
            <div className="back" onClick={this.toBack}>
              <div className="cback"></div>
            </div>
            <div className="headcenter">detail</div>
            <div className="home"></div>
         </div>
           {
               data.map((item,key)=>{
                 return <div className="proditem" key={key} ref="productInfo" data-pid={item.id}>
                     <img style={{width:'80px',height:'80px'}} src={item.imgUrl} alt="" />
                     <div className="rcon">
                        <div className="pname">{item.pname}</div>
                        <div className="price">￥{item.price}起</div>
                        <div className="name">{item.name}</div>
                    </div>
                 </div>
               })
           }
        
      </div>
     );
  }
}

module.exports = Counter;


