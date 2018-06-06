import { connect } from 'react-redux'
import { compile } from '../actions'
import CompileButton from '../components/CompileButton'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onCompile: () => dispatch(compile())
})

export default connect(mapStateToProps, mapDispatchToProps)(CompileButton)
