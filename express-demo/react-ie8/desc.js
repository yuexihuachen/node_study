/*

从 React v15 开始，React DOM 将不会再支持 IE8 了。而中国还有超过 18% 的人在使用 IE8。
如何兼容 IE8:首先，你不应该使用 React v15 或更高版本。使用仍然支持 IE8 的 React v0.14 即可。




react v14

getDefaultProps

getInitialState

createReactClass

React.PropTypes:React.PropTypes自React v15.5起已弃用

refs:可能会在以后的版本中被,废弃getDOMNode 



react v15

defaultProps

constructor:在构造函数里面设置默认state

在声明为ES6类的React组件中，方法遵循与常规ES6类相同的语义。这意味着它们不会自动绑定this到实例。您必须在构造函数中明确使用.bind(this)

extends React.Component

PropTypes

findDOMNode:findDOMNode是用于访问底层DOM节点的逃生舱口,React.findDOMNode

.setProps 及 .replaceProps 已废弃


*/