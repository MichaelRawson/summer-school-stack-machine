import React from 'react'
import ProgramMemory from '../containers/ProgramMemory'
import StepButton from '../containers/StepButton'

const ProgramPane = () => (
  <div className="pane" id="program-pane">
    <StepButton/>
    <ProgramMemory/>
  </div>
)

export default ProgramPane
