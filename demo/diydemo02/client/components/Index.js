var React = require('react');
var calendar  = require('../util/calendar');
var Header  = require('./Header');

class ProductComponent extends React.Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){
    console.log(this.refs.dateinput)
    console.log(calendar())
  }
  render(){

    return (
        <div style={{width:"100%",fontWeight:"bold",fontSize:"20px"}}>
          <div style={{fontWeight:"bold",fontSize:"20px"}}>Component</div>
          <hr />
          <div style={{margin:"0 auto",width:"255px"}}>
                <input type='text' ref="dateinput"  className="form-control" />
          </div>
             <hr />
             <div className="daterangepicker dropdown-menu ltr single opensright show-calendar" style={{top: "331px", left: "173px", right: "auto",display:"block"}}>
                <div className="calendar left single">
                  <div className="calendar-table" dangerouslySetInnerHTML={{__html:calendar()}}></div>
                </div>
             </div>
             

             
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


