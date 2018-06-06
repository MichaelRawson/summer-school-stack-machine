import { connect } from 'react-redux'
import { freshCode } from '../actions'
import Editor from '../components/Editor'

const mapStateToProps = state => ({
  code: state.machine.code
})

const mapDispatchToProps = dispatch => ({
  onFreshCode: code => dispatch(freshCode(code))
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
