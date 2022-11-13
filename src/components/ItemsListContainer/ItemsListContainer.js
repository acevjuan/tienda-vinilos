import { useState, useEffect } from 'react';
import { items } from '../../data/data';
import ItemList from '../ItemList/ItemList';
import './style.css'

const ItemsListContainer = ({ greeting, message }) => {
  const [vinylList, setVinylList] = useState([]);
  
  const getVinylList = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 1500)
  })

  useEffect(() => {
    getVinylList.then(response => {
      setVinylList(response);
      console.log(response);
    });
  }, []);

  return (
    <div className="items-list-container">
      <h1 className="items-list-container_greeting">{greeting}</h1>
      <h2 className="items-list-container_message">{message}</h2>
      <ItemList vinylList={vinylList}/>
    </div>
  )
}

export default ItemsListContainer