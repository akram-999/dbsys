
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Service from './pages/services/service1/Service';
import Service2 from './pages/services/service2/Service';
import ProductDetail from './components/nouveautes/ProductDetaill'
import Bornes from './pages/produits/bornes/Bornes';
import Drive from './pages/produits/drive-thru/Drive';
import Pagers from './pages/produits/pagers/Pagers';
import Signage from './pages/produits/signage/Signage';
import TpvPos from './pages/produits/tpvpos/TpvPos';
import Singup from './pages/singup/Singup'
import SolDetail from './pages/produits/tpvpos/SolDetail';
import Kioskdetail from './pages/produits/bornes/Kioskdetail';
import DriveDetail from './pages/produits/drive-thru/DriveDetail';



function App() {
  
  
  return (
    <Routes>
          
          <Route path='/' element={<Home/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/service1' element={<Service/>}/> 
          <Route path='/service2' element={<Service2/>}/> 
          <Route path='/product/:id' element={<ProductDetail />} />

          <Route path='/bornes' element={<Bornes />} />
          <Route path='/drive' element={<Drive />} />
          <Route path='/pagers' element={<Pagers />} />
          <Route path='/signage' element={<Signage />} />
          <Route path='/pos' element={<TpvPos />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/solution/tpv-pos/:id' element={<SolDetail />} />
          <Route path='/solution/bornes/:id' element={<Kioskdetail />} />
          <Route path='/solution/drive-thru/:id' element={<DriveDetail />} />

         



           
    </Routes>
  );
}

export default App;
