
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' elemnt={<ShopCategory category="mens"/>}/>
      <Route path='/womens' elemnt={<ShopCategory category="womens"/>}/>
      <Route path='/kids' elemnt={<ShopCategory category="kids"/>}/>
      <Route path="product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignp/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
