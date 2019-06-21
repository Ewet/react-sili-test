import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom' //HashRouter
import FrameLayout from '../../components/FramLayout'
import 'antd/dist/antd.css'

ReactDOM.render(
    <Router>
       <FrameLayout />
    </Router>,
    document.getElementById('root')
)
    