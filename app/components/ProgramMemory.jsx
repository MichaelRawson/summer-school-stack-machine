import React from 'react'
import PropTypes from 'prop-types'

const Instruction = (key, instruction, parameters, highlight) => (
  <div
    key={key}
    className={highlight ? "instruction highlight" : "instruction"}
  >
    {instruction} {parameters}
  </div>
)

const ProgramMemory = ({pc, instructions}) => (
  <div id="instructions">
    {instructions.map((l, i) => Instruction(
      i,
      l.instruction,
      l.parameters,
      i == pc 
    ))}
  </div>
)

ProgramMemory.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.shape({instruction: PropTypes.string, parameters: PropTypes.any})).isRequired,
  pc: PropTypes.number.isRequired
}

export default ProgramMemory
