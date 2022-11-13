import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ vinylList }) => {
  return (
    <>
      {vinylList.map((album) => (
        <Item key={album.id} album={album} />
      ))}
    </>
  )
}

export default ItemList