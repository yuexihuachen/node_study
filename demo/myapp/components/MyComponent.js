var React = require('react');

class MyComponent extends React.Component {
  render() {
    const t=this.props;
     return (<div>Hello World  {t.title}</div>);
  }
}

module.exports = MyComponent;


