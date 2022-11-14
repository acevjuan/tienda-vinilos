import './Item.css'
import { NavLink } from 'react-router-dom'

const Item = ( {album} ) => {
  return (
    <NavLink to={`/item/${album.id}`} className='main-container'>
      <div className='item__cover'>
        <img className='item__cover__img' alt={album.title} src={album.cover} />
      </div>
      <div className='item__info'>
        <h2 className='item__info__title'>{album.title}</h2>
        <h3 className='item__info__artist'>{album.artist}</h3>
        <h4 className='item__info__price'>$ {album.price}</h4>
      </div>
    </NavLink>
  )
}

export default Item