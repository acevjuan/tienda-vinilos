import './Item.css'

const Item = ( {album} ) => {
  return (
    <div>
      <img alt={album.title} src={album.cover} style={{maxHeight: '200px'}}/>
      <h2>{album.title}</h2>
      <h3>{album.artist}</h3>
    </div>
  )
}

export default Item