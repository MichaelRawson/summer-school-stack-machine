import React from 'react'
import PropTypes from 'prop-types'

const StepButton = ({onStep}) => (
  <button id="step-button" onClick={e => onStep()}>Step</button>
)

StepButton.propTypes = {
  onStep: PropTypes.func.isRequired
}

export default StepButton
