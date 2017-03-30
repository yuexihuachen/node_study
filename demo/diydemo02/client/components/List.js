var React = require('react');
var Header  = require('./Header');
var Table = require('react-bootstrap').Table;

class ProductComponent extends React.Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){
    
  }
  handClick(e){
      console.log(e.currentTarget)
  }
  render(){
      console.log(require('react-bootstrap'))
      var tabData=this.props.goodsGroup.goodsList;
      const tabName=["#","产品id","产品名称","用户昵称","用户名","性别","评分","价格","销量","城市"]
    return (
        <div style={{width:"100%",display:"flex",flexFlow:"row wrap",justifyContent:"center",height:"60px",alignItems:"center"}}>
          <div style={{fontWeight:"bold",fontSize:"20px"}}>Component</div>
          <hr />
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                  {
                      tabName.map((item,index)=><th key={index}>{item}</th>)
                  }
              </tr>
            </thead>
            <tbody>
              {
                tabData.map((item,index)=>{
                  return (<tr key={index} onClick={this.handClick}>
                          <td>{item.advisorId}</td>
                          <td>{item.productId}</td>
                          <td>{item.productName}</td>
                          <td>{item.guideNickName}</td>
                          <td>{item.guideName}</td>
                          <td>{item.gender}</td>
                          <td>{item.commentScore}</td>
                          <td>{item.minPrice}</td>
                          <td>{item.orderCount}</td>
                          <td>{item.poiName}</td>
                        </tr>)
                })
              }
            </tbody>
          </Table>
        </div>
    )
  }
}



class ProductHeader extends React.Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){

  }
  hasData(){
    var pageName=["Index","List","Other"];
      const data=this.props;
     return (
       <Header />
     );
  }
  render() {
        return this.hasData();
  }
}


class ProductContentList extends React.Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){

  }
  hasData(){
    var pageName=["Index","List","Other"];
    const data=this.props;
     return (
        <div className="content">
         <h1>List</h1>
        </div>
     );
  }
  render() {
        return this.hasData();
  }
}




class List extends React.Component{
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
      const data=this.props;
      if(data){
        return (
          <div>
             <ProductHeader {...this.props}/>
             <ProductContentList {...this.props}/>
             <ProductComponent  {...this.props}/>
          </div>
        )
      } else {
        return this.noData();
      }
  }
}

module.exports = List;


