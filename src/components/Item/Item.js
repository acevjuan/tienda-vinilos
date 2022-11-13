import './Item.css'

const Item = ( {album} ) => {
  return (
    <div>
      <img alt='cover' src={album.cover} style={{maxHeight: '200px'}}/>
      <h2>{album.title}</h2>
      <h3>{album.artist}</h3>
      <h4>{album.genre}</h4>
    </div>
  )
}

export default Item