import React from 'react'

const Count = ({ text, time }) => {
  return (
    <div className='launch__countdown-container'>
      <div className='launch__countdown-card'>
        <div className='launch__countdown-card_top' />
        {time}
      </div>
      <span className='launch__countdown-time'>{text}</span>
    </div>
  )
}

export default Count
