import { connect } from 'react-redux'
import { step } from '../actions'
import StepButton from '../components/StepButton'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onStep: () => dispatch(step())
})

export default connect(mapStateToProps, mapDispatchToProps)(StepButton)
