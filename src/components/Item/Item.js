import './Item.css'
import { NavLink } from 'react-router-dom'

const Item = ( {album} ) => {
  return (
    <NavLink to={`/item/${album.id}`}>
      <div>
        <img alt={album.title} src={album.cover} style={{maxHeight: '200px'}}/>
        <h2>{album.title}</h2>
        <h3>{album.artist}</h3>
      </div>
    </NavLink>
  )
}

export default Item