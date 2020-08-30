/* 
    reducer function modul
    manage state data
*/
import { INCREMENT, DECREMENT } from './action-types'
import { combineReducers } from 'redux'

function count (state=1, action) {
    console.log('count()', state, action)
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }
}

const initUser = {}
/* 
    管理User状态的reducer
*/
function user(state = initUser, action) {
    switch(action.type) {
        default:
            return state
    }
}
/* 
    combineReducers函数: 接受包含所有reducer函数的对象,返回一个新的reducer
*/
export default combineReducers({
    count: count,
    user: user
})