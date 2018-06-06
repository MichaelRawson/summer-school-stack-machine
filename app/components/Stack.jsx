import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const StackItem = (index, item) => (
  <CSSTransition
    key={`${index}/${item}`}
    timeout={300}
    classNames="stack-item"
  >
    <div className="stack-item">{item}</div>
  </CSSTransition>
)

const Stack = ({stack}) => (
  <TransitionGroup id="stack" className="stack">
    {stack.map((s, i) => (
      StackItem(i, s)
    ))}
  </TransitionGroup> 
)

Stack.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.number)
}

export default Stack
