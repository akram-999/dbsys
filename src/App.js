
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Service from './pages/services/service1/Service';
import Service2 from './pages/services/service2/Service';




function App() {
  
  
  return (
    <Routes>
          
          <Route path='/' element={<Home/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/service1' element={<Service/>}/> 
          <Route path='/service2' element={<Service2/>}/> 
          
           
    </Routes>
  );
}

export default App;
