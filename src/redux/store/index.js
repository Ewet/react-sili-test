
import {createStore, applyMiddleware} from 'redux';
import indexReducer from '../reducers/indexReducers'

// redux-devtools-extension,redux-logger
import {logger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    indexReducer,
    composeWithDevTools( // 开启浏览器的调试工具
        applyMiddleware(logger), // 导入logger插件
    )
)

export default store;

// Store 就是把它们联系到一起的对象。Store 有以下职责：

// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。