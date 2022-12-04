import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import './style.css'

const ItemsListContainer = ({ greeting, message }) => {


  const [albumList, setAlbumList] = useState([]);

  const { filterBy } = useParams();
  
  const getAlbumList = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'albums');
    getDocs(querySnapshot)
      .then((response) => {
        const data = response.docs.map((album) => {
          console.log(album.data());
          console.log(album.id);
          return {id: album.id, ...album.data()};
        });
        setAlbumList(data);
        console.log(data);
      })
      .catch((error) => {console.log(error)})
  };

  useEffect(() => {
    getAlbumList();
  }, [filterBy]);

  return (
    <div className="items-list-container">
      <div className="items-list-container__greeting">
        <h1 className="items-list-container__greeting__main">{greeting}</h1>
        <h2 className="items-list-container__greeting__message">{message}</h2>
      </div>
      <div className='items-list-container__content'>
        <ItemList albumList={albumList}/>
      </div>
    </div>
  )
}

export default ItemsListContainer