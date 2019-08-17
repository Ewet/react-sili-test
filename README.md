# react
react-test

#### redux 的原理 http://huziketang.mangojuice.top/books/react/lesson34


Store 就是把它们联系到一起的对象。

Store 有以下职责：
维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 方法更新 state；
通过 subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。

creatStore()的原理
function createStore (state, stateChanger) {
    const getState = () => state
    const dispatch = (action) => stateChanger(state, action)
    return { getState, dispatch }
  }

增加数据监听函数
function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state, action)
        listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
}

覆盖原来的state
function createStore (state, stateChanger) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = stateChanger(state, action) // 覆盖原对象
    listeners.forEach((listener) => listener())
  }
  return { getState, dispatch, subscribe }
}



#### 插件
代码提示vscode插件
  Simple React Snippets



#### 功能点流程
1.创建一个store

a.通过createStore创建一个store，把store传入Provider模块中，在全局才可以使用
b.在reducer中定义不同变量的actions，通过combineReducers模块组合所有的reducer；把reducer传给store中
c.在actions中定义action.type；传给reducer和mapDispatchToProps使用；
d.通过mapStateToProps来获取reduce中state的值；
e.通过mapDispatchToProps中的dispatch和actions来改变store中state的值；
f.通过connect模块把mapStateToProps、mapDispatchToProps和render绑定到一起再暴露出去；
g.通过this.props在页面元素中使用state；




