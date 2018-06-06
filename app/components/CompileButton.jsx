import React from 'react'
import PropTypes from 'prop-types'

const CompileButton = ({onCompile}) => (
  <button id="compile-button" onClick={e => onCompile()}>Load</button>
)

CompileButton.propTypes = {
  onCompile: PropTypes.func.isRequired
}

export default CompileButton
