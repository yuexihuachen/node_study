var React = require('react');

class MyComponent extends React.Component {
  handleClickDec(e){
    console.log('dec')
  }
  handleClickAdd(e){
    console.log('add')
  }
  render() {
    const t=this.props;
     return (
       <div className="body">     
        <button className="dec" onClick={this.handleClickDec}>-</button>
        <div className="content">{t.title}</div>
        <button className="add" onClick={this.handleClickAdd}>+</button>
      </div>
     );
  }
}

module.exports = MyComponent;


