import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import indexReducer from '../../redux/reducers/indexReducers'

// redux-devtools-extension,redux-logger
import {logger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter as Router } from 'react-router-dom' //HashRouter
import FrameLayout from '../../components/FramLayout'
import 'antd/dist/antd.css'

const store = createStore(
    indexReducer,
    composeWithDevTools( // 开启浏览器的调试工具
        applyMiddleware(logger), // 导入logger插件
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <FrameLayout />
        </Router>
    </Provider>,
    document.getElementById('root')
)
    