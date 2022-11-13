import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemsListContainer greeting="Bienvenido a roygbiv record store" message="Acá encontrarás tus álbumes favoritos, en un formato atemporal"/>
        <ItemDetailContainer />
        <ItemDetail />
    </div>
  );
}

export default App;