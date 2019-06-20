import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import FrameLayout from '../../components/FramLayout'
import 'antd/dist/antd.css'

ReactDOM.render(
    <BrowserRouter>
       <FrameLayout />
    </BrowserRouter>,
    document.getElementById('root')
)
    