/* 
包含n个用来创建action的工厂函数
action creators
*/
import { INCREMENT, DECREMENT } from './action-types'
//增加的action
export const increment = number => ({type: INCREMENT, data: number})
//减少的action, =>对象
export const decrement = number => ({type: DECREMENT, data: number})
//异步增加, =》函数
export const incrementAsync = number => {
    return dispatch => {
        //执行异步,定时器,ajax,promise
        setTimeout(() => {
            //当一步任务执行完成时,分发一个同步action
            dispatch(increment(number))
        }, 1000)
    }
}