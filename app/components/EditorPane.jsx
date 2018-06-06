import React from 'react'
import Editor from '../containers/Editor'
import CompileButton from '../containers/CompileButton'

const EditorPane = () => (
  <div className="pane" id="editor-pane">
    <CompileButton/>
    <Editor/>
  </div>
)

export default EditorPane
