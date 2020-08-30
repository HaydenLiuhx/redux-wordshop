
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increment, decrement } from '../redux/actions'
/* 
容器组件: 通过connect包装UI组件产生的组件
connect():高阶函数
connect()返回的函数是一个高阶组件,接受一个UI组件,生成一个容器组件
容器组件的责任是: 向UI组件传入特定的属性
*/
function mapStateToProps(state) {
    return {
        count: state.count
    }
}
function mapDispatchToProps(dispatch) {
    return {
        increment: (number) => dispatch(increment(number)),
        decrement: (number) => dispatch(decrement(number)),
    }
}
export default connect(
    mapStateToProps, //一般属性
    mapDispatchToProps //函数属性
)(Counter)