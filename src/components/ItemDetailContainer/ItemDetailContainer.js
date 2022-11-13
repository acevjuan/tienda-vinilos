import { useState, useEffect } from 'react';
import { items } from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [album, setAlbum] = useState();

  const getAlbum = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000)
  })

  useEffect(() => {
    getAlbum.then(response => {
      setAlbum(response[0]);
    });
  });

  return (
    <div>
      <ItemDetail cover={album?.cover} title={album?.title} artist={album?.artist} price={album?.price} released={album?.released} genre={album?.genre} usersRating={album?.usersRating}/>
    </div>
  )
}

export default ItemDetailContainer