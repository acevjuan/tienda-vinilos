import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemsListContainer greeting="Bienvenido a roygbiv record store" message="Acá encontrarás tus álbumes favoritos, en un formato atemporal"/>} />
        <Route path='/category/:filterBy' element={<ItemsListContainer greeting="Bienvenido a roygbiv record store" message="Acá encontrarás tus álbumes favoritos, en un formato atemporal"/>} />
        <Route path='/item/:albumId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;