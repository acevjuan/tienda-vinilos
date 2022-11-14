import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../../data/data';
import ItemList from '../ItemList/ItemList';
import './style.css'

const ItemsListContainer = ({ greeting, message }) => {
  const [albumList, setAlbumList] = useState([]);

  const { filterBy } = useParams();
  
  const getAlbumList = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (filterBy) {
        console.log(`Filtrar por ${filterBy}`);
        let filteredCategory = '';
        filteredCategory = items.filter((item) => {
          return item.genre === filterBy;
        })
        if (filterBy === 'nuevos-lanzamientos') {
          filteredCategory = items.filter((item) => {
            return item.newRelease === true;
          })
        }
        if (filterBy === 'mas-vendidos') {
          filteredCategory = items.filter((item) => {
            return item.bestSeller === true;
          })
        }
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
  }, [filterBy]);

  return (
    <div className="items-list-container">
      <div className="items-list-container__greeting">
        <h1 className="items-list-container__greeting__main">{greeting}</h1>
        <h2 className="items-list-container__greeting__message">{message}</h2>
      </div>
      <div className='items-list-container__content'>
        <ItemList albumList={albumList}/>
      </div>
    </div>
  )
}

export default ItemsListContainer