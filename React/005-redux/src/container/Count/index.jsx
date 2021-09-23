import Count from '../../components/CountUI'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  ride,
  divide,
  incrementAsync
} from '../../redux/actionCount'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => dispatch(increment(number)),
    jian: (number) => dispatch(decrement(number)),
    chen: (number) => dispatch(ride(number)),
    chu: (number) => dispatch(divide(number)),
    jiaAsync: (number, time) => dispatch(incrementAsync(number, time))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count)
