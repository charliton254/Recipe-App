import './App.css';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import { Routes, Route, useLocation } from 'react-router-dom';
import Icons from './components/Icons';
import Search from './components/Search';
import Searched from './pages/Searched';
import Recipe from './pages/Recipe';
import Nav from './components/Nav';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav/>
      <Search/>
      <Icons/>
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={ <Home/> } />
        <Route path='/Cuisine/:type' element={ <Cuisine/> } />
        <Route path='/searched/:search' element={ <Searched/> } />
        <Route path='/recipe/:name' element={<Recipe/>} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
