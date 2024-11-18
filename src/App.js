
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

function App() {
  return (
    <Routes>
          
          <Route path='/' element={<Home/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/about' element={<About/>}/> 
          
           
    </Routes>
  );
}

export default App;
