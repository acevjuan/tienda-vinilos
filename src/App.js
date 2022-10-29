import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemsListContainer greeting="Bienvenido a roygbiv vynil store"/>
    </div>
  );
}

export default App;
