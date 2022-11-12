import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemsListContainer greeting="Bienvenido a roygbiv record store" message="Acá encontrarás tus álbumes favoritos, en un formato atemporal"/>
        <ItemCount />
    </div>
  );
}

export default App;