import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { Provider } from 'react-redux';
import store from '../../redux/store'

import { BrowserRouter as Router } from 'react-router-dom' //HashRouter
import FrameLayout from '../../components/FramLayout'
import 'antd/dist/antd.css'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <FrameLayout />
        </Router>
    </Provider>,
    document.getElementById('root')
)
    