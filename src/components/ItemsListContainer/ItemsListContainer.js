import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../../data/data';
import ItemList from '../ItemList/ItemList';
import './style.css'

const ItemsListContainer = ({ greeting, message }) => {
  const [albumList, setAlbumList] = useState([]);

  const { filterBy } = useParams();
  console.log(filterBy);
  
  const getAlbumList = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (filterBy) {
        console.log(`Filtrar por ${filterBy}`);
        const filteredCategory = items.filter((item) => {
          return item.genre === filterBy;
        })
        console.log(filteredCategory);
        resolve(filteredCategory);
      }
      else {
      resolve(items)
      };
    }, 2000)
  })

  useEffect(() => {
    getAlbumList.then(response => {
      setAlbumList(response);
    });
  });

  return (
    <div className="items-list-container">
      <h1 className="items-list-container_greeting">{greeting}</h1>
      <h2 className="items-list-container_message">{message}</h2>
      <ItemList albumList={albumList}/>
    </div>
  )
}

export default ItemsListContainer