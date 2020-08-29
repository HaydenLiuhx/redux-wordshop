/*
    Entrance
    ReactDOM.render(）的作用是将<App/>的内容渲染到根“root”中去。
*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'


//将App组件标签渲染到index页面的div上
ReactDOM.render(<App/>, document.getElementById('root'))