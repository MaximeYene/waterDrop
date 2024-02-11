import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Produits from './pages/produits';
import Contact from './pages/contact';
import Connection from './pages/connection';
import CreateArticle from './pages/createArticle';


function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/produits' element={<Produits/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/connexion' element={<Connection/>} />
      <Route path='/createArticle' element={<CreateArticle/>} />
    </Routes>
  )
}

export default App;
