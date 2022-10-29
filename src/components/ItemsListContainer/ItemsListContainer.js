import React from 'react'
import './style.css'

const ItemsListContainer = ({ greeting, message }) => {
  return (
    <div className="items-list-container">
      <h1 className="items-list-container_greeting">{greeting}</h1>
      <h2 class="items-list-container_message">{message}</h2>
    </div>
  )
}

export default ItemsListContainer