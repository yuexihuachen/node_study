var React = require('react');

class MyComponent extends React.Component {
  handleClick(e){
    console.log(e.currentTarget);
  }
  imageError(e){
    e.currentTarget.src="http://dimg04.c-ctrip.com/images/700d09000000487lhEA93_480_96_21.jpg"
  }
  render() {
    const t=this.props;
     return (<div onClick={this.handleClick}>
     Hello World  {t.title}
     <img src="https://10.2.6.249/images/30030b000000018sf3AA6.png" onError={this.imageError} alt="" />
     </div>);
  }
}

module.exports = MyComponent;


