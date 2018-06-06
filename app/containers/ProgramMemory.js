import { connect } from 'react-redux'
import ProgramMemory from '../components/ProgramMemory'

const mapStateToProps = state => ({
  instructions: state.machine.instructions,
  pc: state.machine.pc
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProgramMemory)
