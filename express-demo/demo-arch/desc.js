/*
Redux基本概念

Store: Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
       Store 就是用来维持应用所有的 state 树的一个对象。 改变 store 内 state 的惟一途径是对它 dispatch 一个 action。

State: Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。当前时刻的 State，可以通过store.getState()拿到。

--------------------------------------------------
Action:  State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。
         所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。

Action Creator(Action 创建函数):  View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。

Reducer:  Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
          Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
          Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。
          由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象。
---------------------------------------------------
Action 只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。而这正是 reducer 要做的事情。


Store 方法:
getState():  返回应用当前的 state 树。
store.dispatch():  store.dispatch()是 View 发出 Action 的唯一方法。
store.subscribe():  store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
replaceReducer(nextReducer):  替换 store 当前用来计算 state 的 reducer。

createStore：  创建一个 Redux store 来以存放应用中所有的 state。

combineReducers(reducers)：  随着应用变得复杂，需要对 reducer 函数 进行拆分，拆分后的每一块独立负责管理 state 的一部分。

bindActionCreators(actionCreators, dispatch)： 
惟一使用 bindActionCreators 的场景是当你需要把 action creator 往下传到一个组件上，却不想让这个组件觉察到 Redux 的存在，而且不希望把 Redux store 或 dispatch 传给它。

Middleware   applyMiddleware(...middlewares)
相对于 Express 或者 Koa 的 middleware，Redux middleware 被用于解决不同的问题，但其中的概念是类似的。
它提供的是位于 action 被发起之后，到达 reducer 之前的扩展点。 
你可以利用 Redux middleware 来进行日志记录、创建崩溃报告、调用异步接口或者路由等等。
*************使用包含自定义功能的 middleware 来扩展 Redux 是一种推荐的方式。****************

异步 Action，异步数据流
当调用异步 API 时，有两个非常关键的时刻：发起请求的时刻，和接收到响应的时刻 （也可能是超时）。

compose(...functions)：
从右到左来组合多个函数。这是函数式编程中的方法，为了方便，被放到了 Redux 里。 当需要把多个 store 增强器 依次执行的时候，需要用到它。

-----------------------------------------
单一数据源:整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

State 是只读的:惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

使用纯函数来执行修改:为了描述 action 如何改变 state tree ，你需要编写 reducers。
-------------------------------------------

容器组件（Smart/Container Components）和展示组件（Dumb/Presentational Components）
Redux 的 React 绑定库包含了 容器组件和展示组件相分离 的开发思想。

明智的做法是只在最顶层组件（如路由操作）里使用 Redux。其余内部组件仅仅是展示性的，所有数据都通过 props 传入。

  描述                   容器组件  	            展示组件
Location	        最顶层，路由处理	       中间和子组件
Aware of Redux	        是	                    否
读取数据	        从 Redux 获取 state	    从 props 获取数据
修改数据	        向 Redux 派发 actions	    从 props 调用回调函数




React redux:

React-Redux 提供Provider组件，可以让容器组件拿到state。
React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。

<Provider store>: <Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。
                  如果你真的不想把根组件嵌套在 <Provider> 中，你可以把 store 作为 props 传递到每一个被 connet() 包装的组件，
                  但是我们只推荐您在单元测试中对 store 进行伪造 (stub) 或者在非完全基于 React 的代码中才这样做。正常情况下，你应该使用 <Provider>。


connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
mapStateToProps:mapStateToProps是一个函数。它的作用是建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
mapDispatchToProps:用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。














*/

