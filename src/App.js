
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
          
          <Route path='/' element={<Home/>}/> 
          
           
    </Routes>
  );
}

export default App;
