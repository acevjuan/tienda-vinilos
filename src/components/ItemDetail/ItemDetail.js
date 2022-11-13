import './ItemDetail.css';

const ItemDetail = ({ cover, title, artist, price, released, genre, usersRating }) => {
  return (
    <div>
      <img src={cover} style={{ maxWidth: '300px' }}/>
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <h4>$ {price}</h4>
      <div>
        <h4>Genre: {genre}</h4>
        <h4>Released: {released}</h4>
        <h4>Rating: {usersRating} / 5.00</h4>
      </div>
    </div>
  )
}

export default ItemDetail