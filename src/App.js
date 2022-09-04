import './App.css';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Cuisine/:type' element={ <Cuisine/> } />
        <Route path='/' element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
