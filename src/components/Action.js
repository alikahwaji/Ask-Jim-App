import React from 'react'

const Action = (props) => (
  <div>
    <button
      className='big-button'
      onClick={props.handlePick}
      disabled= {!props.hasOptions}
    >
        Hi Jim! What are we doing today?</button>
  </div>
)

export default Action
