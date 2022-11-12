import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemsListContainer greeting="Bienvenido a roygbiv record store" message="Acá encontrarás tus álbumes favoritos, en un formato atemporal"/>
        <Item />
        <ItemList />

    </div>
  );
}

export default App;