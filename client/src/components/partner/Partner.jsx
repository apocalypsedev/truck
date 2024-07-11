import React from 'react'
import "./Partner.css"
import { cards } from '../../constants/data'
function Partner() {
  return (
    <div className='partner'>
      {cards.map((item)=>(
        <div>
          <img src={item.img} alt="" />
          <h1>{item.title}</h1>
          <p>{item.stats}</p>
        </div>
      ))}
    </div>
  )
}

export default Partner