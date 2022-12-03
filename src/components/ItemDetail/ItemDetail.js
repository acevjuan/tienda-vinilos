import { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ album }) => {
  const [count, setCount] = useState(1);
  return (
    <div className='main'>
      <div className='item-detail'>
        <div className='item-detail__cover'>
          <img className='item-detail__cover__img' alt={album.title} src={album.cover} />
        </div>
        <div className='item-detail__main-info'>
          <h2 className='item-detail__main-info__title'>{album.title}</h2>
          <h3 className='item-detail__main-info__artist'>{album.artist}</h3>
          <h4 className='item-detail__main-info__price'>$ {album.price}</h4>
        </div>
        <div className='item-detail__detail'>
          <h4 className='item-detail__detail__genre'>Genre: {album.genre}</h4>
          <h4 className='item-detail__detail__released'>Released: {album.released}</h4>
          <h4 className='item-detail__detail__rating'>Rating: {album.usersRating} / 5.00</h4>
          <h5 className='item-detail__detail__stock'>En inventario: {album.stock}</h5>
        </div>
        <div className='item-detail__counter'>
          <ItemCount album={album} setCount={setCount} count={count}/>
        </div>
      </div>
    </div>
      )
}

export default ItemDetail