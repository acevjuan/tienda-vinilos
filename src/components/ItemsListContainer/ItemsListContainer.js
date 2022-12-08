import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import './style.css'

const ItemsListContainer = ({ greeting, message }) => {

  const [albumList, setAlbumList] = useState([]);

  // filterBy toma la información que se utilizará para filtrar los productos por categoría. Si no existe, se mostrarán todos los productos sin filtrar.
  const { filterBy } = useParams();
  
  // Trae los productos de la base de datos de Firestore.
  // La función es extensa ya que busca filtrar por lo siguientes criterios: género musica, nuevo lanzamiento o más vendido.
  // La función trabaja de la siguiente manera: 1.- Verifica si existe filterBy, es decir, si existe un criterio para filtrar. Si no es el caso, renderiza todo el catálogo de productos; 2.- Si existe algún criterio para filtrar, creará una variable vacía llamada queryFilter. 3.- Si el filterBy es un género musical, se le asignara como valor todos los productos que coinciden con esa propiedad, si no, esta quedará vacía; 4.- Finalmente, verificará si filterBy es 'nuevos-lanzamientos' o 'mas-vendidos', y si es el caso, asignará a queryFilter los productos que coincidan con estos criterios para filtrar.
  const getAlbumList = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'albums');
    if(filterBy) {
      let queryFilter;
      queryFilter = query(querySnapshot, where('genre', '==', filterBy));
      if(filterBy === 'nuevos-lanzamientos') {
        queryFilter = query(querySnapshot, where('newRelease', '==', true));
        getDocs(queryFilter)
        .then((response) => {
          const data = response.docs.map((album) => {
            return {id: album.id, ...album.data()};
          });
          setAlbumList(data);
        })
        .catch((error) => {console.log(error)})
      }
      if(filterBy == 'mas-vendidos') {
        queryFilter = query(querySnapshot, where('bestSeller', '==', true));
        getDocs(queryFilter)
        .then((response) => {
          const data = response.docs.map((album) => {
            return {id: album.id, ...album.data()};
          });
          setAlbumList(data);
        })
        .catch((error) => {console.log(error)});
      }
      getDocs(queryFilter)
      .then((response) => {
        const data = response.docs.map((album) => {
          return {id: album.id, ...album.data()};
        });
        setAlbumList(data);
      })
      .catch((error) => {console.log(error)})
    } else {
      getDocs(querySnapshot)
      .then((response) => {
        const data = response.docs.map((album) => {
          return {id: album.id, ...album.data()};
        });
        setAlbumList(data);
      })
      .catch((error) => {console.log(error)})
    }    
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