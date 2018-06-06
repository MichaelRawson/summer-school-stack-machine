import React from 'react'
import PropTypes from 'prop-types'

const Editor = ({code, onFreshCode}) => (
  <textarea
    id="editor"
    value={code}
    onChange={e => onFreshCode(e.target.value)}
  />
)

Editor.propTypes = {
  code: PropTypes.string.isRequired,
  onFreshCode: PropTypes.func.isRequired
}

export default Editor
