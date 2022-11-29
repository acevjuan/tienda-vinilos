import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [album, setAlbum] = useState();

  const { albumId } = useParams();
  
  const getAlbum = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Mostrar detalle de album con id ${albumId}`);
      const albumDetail = items.filter((item) => {
        return item.id === parseInt(albumId);
      })
      console.log(albumDetail);
      resolve(albumDetail);
    }, 2000);
  })

  useEffect(() => {
    getAlbum.then(response => {
      setAlbum(response[0]);
    });
  });

  return (
    <div className='item-detail-container'>
      <ItemDetail cover={album?.cover} title={album?.title} artist={album?.artist} price={album?.price} released={album?.released} genre={album?.genre} usersRating={album?.usersRating} stock={album?.stock}/>
    </div>
  )
}

export default ItemDetailContainer