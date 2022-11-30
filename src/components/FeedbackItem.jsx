
import { useState } from 'react'
import React from 'react'
function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is example text for feedback')
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div> 
      <div className='text-display'>
        {text}
      </div>
    </div>
  )
}

export default FeedbackItem
