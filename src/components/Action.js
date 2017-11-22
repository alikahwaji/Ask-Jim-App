import React from 'react'

const Action = (props) => (
  <div>
    <button
      className='big-button'
      onClick={props.handlePick}
      disabled= {!props.hasOptions}
    >
        Hi Jim, what are we doing for today?</button>
  </div>
)

export default Action
