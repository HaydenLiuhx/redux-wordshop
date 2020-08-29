import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
/* 
创建store对象内部会第一次调用reducer()得到初始值
*/
export default createStore(reducer, applyMiddleware(thunk))