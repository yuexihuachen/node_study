var React = require('react');

class Counter extends React.Component {
  handleClickDec(e){
    console.log('dec')
  }
  handleClickAdd(e){
    console.log('add')
  }
  render() {
    const data=this.props.product;
     return (
       <div className="cbody">     
           {
               data.map((item,key)=>{
                 return <div className="proditem" key={key}>
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


