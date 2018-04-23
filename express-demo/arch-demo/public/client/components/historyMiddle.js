import { Component, Children } from 'react';
import PropTypes from 'prop-types'

const hisKey = 'history';
const subscriptionKey = `Subscription`

class History extends Component {
    getChildContext() {
      return { [hisKey]: this[hisKey], [subscriptionKey]: null }
    }

    constructor(props, context) {
      super(props, context);
      this[hisKey] = props.history;
    }

    render() {
      return Children.only(this.props.children)
    }
}

History.propTypes = {
    children: PropTypes.element.isRequired,
}



export default History
