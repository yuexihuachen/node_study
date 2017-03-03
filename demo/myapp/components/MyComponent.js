var React = require('react');

class MyComponent extends React.Component {
  render() {
    const t=this.props;
    console.log(t)
     return (<div>Hello World{t.value}</div>);
  }
}

module.exports = MyComponent;
