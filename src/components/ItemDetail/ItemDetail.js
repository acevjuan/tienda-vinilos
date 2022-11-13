import './ItemDetail.css';

const ItemDetail = ({ cover, title, artist, released, genre }) => {
  return (
    <div>
      <img src={cover} style={{ maxWidth: '300px' }}/>
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <h4>$20.00</h4>
      <div>
        <h4>Released: {released}</h4>
        <h4>Genre: {genre}</h4>
      </div>
    </div>
  )
}

export default ItemDetail