import './ItemDetailContainer.css';
import { items } from '../../data/data';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [albumList, setAlbumList] = useState([]);

  const getAlbumList = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 1500)
  })

  useEffect(() => {
    getAlbumList.then(response => {
      setAlbumList(response)
    });
  }, []);

  return (
    <>
      <ItemDetail albumList={albumList}/>
    </>
  )
}

export default ItemDetailContainer