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

