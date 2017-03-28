var React = require('react');
var Header  = require('./Header');

class ProductComponent extends React.Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){
    
  }
  render(){
    return (
        <div style={{width:"100%",display:"flex",flexFlow:"row wrap",justifyContent:"center",height:"60px",alignItems:"center",fontWeight:"bold",fontSize:"20px"}}>
          Component
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
         <h1>index</h1>
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

module.exports = Index;


