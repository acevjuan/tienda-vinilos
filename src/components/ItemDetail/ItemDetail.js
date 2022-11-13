import './ItemDetail.css';

const ItemDetail = ({ albumList }) => {
  return (
    <div>
      <img alt="album cover" src={albumList[0].cover} style={{ maxWidth: '250px' }}/>
      <h2>Title: {albumList[0].title}</h2>
      <h3>Artist: {albumList[0].artist}</h3>
      <h4>Price: $20.00</h4>
      <div>
        <div>Year: {albumList[0].released}</div>
        <div>Genre: {albumList[0].genre}</div>
        <div>Other: Por definir</div>
      </div>
    </div>
  )
}

export default ItemDetail