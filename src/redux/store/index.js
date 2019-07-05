
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
