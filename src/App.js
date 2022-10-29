import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemsListContainer greeting="Bienvenido a roygbiv record store" message="Acá encontras tus álbumes favoritos en formato atemporal"/>
    </div>
  );
}

export default App;
