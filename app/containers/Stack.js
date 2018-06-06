import { connect } from 'react-redux'
import Stack from '../components/Stack'

const mapStateToProps = state => ({
  stack: state.machine.stack
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Stack)
