

import React from 'react'

const Counter = ({ increaseCountButton, decreaseCountButton, count }) => {
  return (
    <div>
        <h5>The Count is: {count}</h5>
        <button onClick={increaseCountButton}>Increase Count</button>
        <button onClick={decreaseCountButton}>Decrease Count</button>
    </div>
  )
}

export default Counter;