require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

/**
一个令人失望的消息：从 React v15 开始，React DOM 将不会再支持 IE8 了。而中国还有超过 18% 的人在使用 IE8。
首先，你不应该使用 React v15 或更高版本。使用仍然支持 IE8 的 React v0.14 即可。

 */


const React = require('react');
const ReactDOM = require('react-dom');

const rootEl = {
  root1: document.getElementById('root1'),
  root2: document.getElementById('root2'),
  root3: document.getElementById('root3'),
  root4: document.getElementById('root4'),
  root5: document.getElementById('root5'),
  root6: document.getElementById('root6'),
  root7: document.getElementById('root7'),
  root8: document.getElementById('root8'),
  root9: document.getElementById('root9')
};

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('app')
);

var names = ['Alice', 'Emily', 'Kate'];
ReactDOM.render(
  <div>
    <h1>JSX 语法</h1>
    {
      names.map(function (name, index) {
        return <div key={index}>Hello, {name}!</div>
      })
    }
  </div>,
  rootEl.root2
);

var arr = [
  <h1 key={0}>Hello world!</h1>,
  <h2 key={1}>React is awesome</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  rootEl.root3
);

class HelloMessage extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
ReactDOM.render(
  <HelloMessage name="John" />,
  rootEl.root4
);

class NotesList extends React.Component {
  render() {
    return (
      <ol>
        {
          React.Children.map(this.props.children, function (child,index) {
            return <li key={index}>{child}</li>
          })
        }
      </ol>
    );
  }
};
ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  rootEl.root5
);



class MyTitle extends React.Component {
  render() {
    return (<h1> {this.props.title} </h1>);
  }
};

MyTitle.propTypes ={
  title:React.PropTypes.number.isRequired
}

MyTitle.defaultProps={
  title:123
}

ReactDOM.render(
  <MyTitle />,
  rootEl.root6
);




class MyComponent extends React.Component {
  handleClick() {
    this.refs.myTextInput.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
};
ReactDOM.render(
  <MyComponent />,
  rootEl.root7
);


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    }
  }
  handleClick(event) {
    this.setState({ liked: !this.state.liked });
  }
  render() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick.bind(this)}>
        You {text} this. Click to toggle.
      </p>
    );
  }
};
ReactDOM.render(
  <LikeButton />,
  rootEl.root8
);

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }
  handleChange(event) {
    var that = this;
    that.setState({ value: event.target.value });
  }
  render() {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange.bind(this)} />
        <p>{value}</p>
      </div>
    );
  }
}

Input.defaultProps = {
  value: 'Mary'
};

ReactDOM.render(<Input />, rootEl.root9);

