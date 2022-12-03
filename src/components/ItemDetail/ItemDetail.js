import { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ cover, title, artist, price, released, genre, usersRating, stock }) => {
  const [count, setCount] = useState(1);
  return (
    <div className='main'>
      <div className='item-detail'>
        <div className='item-detail__cover'>
          <img className='item-detail__cover__img' alt={title} src={cover} />
        </div>
        <div className='item-detail__main-info'>
          <h2 className='item-detail__main-info__title'>{title}</h2>
          <h3 className='item-detail__main-info__artist'>{artist}</h3>
          <h4 className='item-detail__main-info__price'>$ {price}</h4>
        </div>
        <div className='item-detail__detail'>
          <h4 className='item-detail__detail__genre'>Genre: {genre}</h4>
          <h4 className='item-detail__detail__released'>Released: {released}</h4>
          <h4 className='item-detail__detail__rating'>Rating: {usersRating} / 5.00</h4>
          <h5 className='item-detail__detail__stock'>En inventario: {stock}</h5>
        </div>
        <div className='item-detail__counter'>
          <ItemCount albumStock={stock} setCount={setCount} count={count}/>
        </div>
      </div>
    </div>
      )
}

export default ItemDetail