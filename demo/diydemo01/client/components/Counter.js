var React = require('react');

class Counter extends React.Component {
  render() {
    const { value, action } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={action.onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

module.exports = Counter;


