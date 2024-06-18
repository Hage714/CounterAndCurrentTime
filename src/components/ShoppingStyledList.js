import React from 'react'

const ShoppingStyledList = ({items}) => {

  return (
    <div>
      
      <div className="list-container">
      <ul className="styled-list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
     </div>
    </div>
  )
}

export default ShoppingStyledList
