import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ albumList }) => {
  return (
    <>
      {albumList.map((album) => (
        <Item key={album.id} album={album} />
      ))}
    </>
  )
}

export default ItemList