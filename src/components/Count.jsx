import React from 'react'

const Count = ({ text, time }) => {
  return (
    <div className='launch__countdown-card'>
      <div>
        <div />
        {time}
      </div>
      <span>{text}</span>
    </div>
  )
}

export default Count
