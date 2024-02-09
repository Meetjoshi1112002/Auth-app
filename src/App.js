import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar.jsx';
import Shop from './pages/shop/shop.jsx';
import Cart from './pages/cart/cart.jsx';
import {ShopContextProvider} from './context/shop-context.jsx';

function App() {
  return (
    <>
    <Router>
    <ShopContextProvider>
    <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/cart'element={<Cart/>}/>
      </Routes>
    </ShopContextProvider>
    </Router>
    </>
  );
}

export default App;
