var React = require('react');

class MyComponent extends React.Component {
  render() {
    const data=this.props;
     return (
       <div className="root">
         <button onClick={data.onDecrement}>-</button>
          <div className="content"> {data.value}</div>
          <button  onClick={data.onIncrement}>+</button>
       </div>
     );
  }
}

module.exports = MyComponent;


