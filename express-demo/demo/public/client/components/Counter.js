var React = require('react');
//UI 组件
class Counter extends React.Component {
  componentWillMount(){//在组件装载发生之前立即被调用。 
    //它在 render() 之前调用，因此在此方法中的设置 state(状态) 不会触发重新渲染。 

  } 
  constructor(props) {// 类构造函数(class constructor) 初始化 
    super(props);
    //组件需要与用户互动，React 就是将组件看成是一个状态机，
    //一开始有一个初始状态this.state，然后和用户互动，导致状态变化，从而触发重新渲染 UI 
    //当用户点击组件，导致状态变化，this.setState 方法就是修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。

    //不能直接修改 state(状态)，唯一可以分配 this.state 的地方是构造函数。
  }
  componentDidMount(){//在组件输出被渲染到 DOM 之后运行
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }
  render() {
    //输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。它可以是一个函数，也可以是一个对象。做出不同的处理
    //const { count, onIncreaseClick,onDecreaseClick } = this.props //对象
    const { count,increase,decrease } = this.props //函数
    return (
      <div>
        <span>{count}</span>
        <button onClick={increase.bind('add')}>Increase</button>
        <button onClick={decrease.bind('dec')}>decrease</button>
      </div>
    )
  }
}

export default Counter

