import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [album, setAlbum] = useState([]);

  // Para indicar el album/prpducto a mostrar.
  const { albumId } = useParams();
  
  // Trae la información del album/producto seleccionado de Firestore.
  const getAlbum = () => {
    const db = getFirestore();

    const query = doc(db, 'albums', albumId);

    getDoc(query)
      .then((response) => {
        setAlbum({ id: response.id, ...response.data() });
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAlbum();
  }, [albumId]);

  return (
    <div className='item-detail-container'>
      <ItemDetail album={album}/>
    </div>
  )
}

export default ItemDetailContainer