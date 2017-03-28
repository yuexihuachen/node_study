var React = require('react');

class Header extends React.Component{
    constructor(props){
      super(props);
  }
  componentDidMount(){

  }
  toLink(e){
    var target=e.currentTarget.dataset;
    window.location.href="./"+(target.url=="Index"?'':target.url.toLowerCase());
  }
  render(){
        var pageName=["Index","List","Detail","Other"];
    const data=this.props;
     return (
       <div className="cbody">     
         <div className="header">
            <div className="headcenter">
              {
                pageName.map((item,index)=>{
                  return (
                    <div key={index} data-url={item} className="url" onClick={this.toLink}>
                      {item}
                    </div>
                  )
                })
              }
            </div>
         </div>
      </div>
  )
  }
}

module.exports = Header;


