import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigations';
import Homepage from './customer/pages/Homepage/Homepage';
import Products from './customer/components/Product/Products'
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDertails from './customer/components/Order/OrderDertails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './customer/CustomerRoutes';

function App() {
  return (
    <div className="">

    <Routes>
      <Route path='/*' element={<CustomerRoutes/>}/>
    </Routes>

      <Navigation />
      <div className='pt-5'>
        {/* <Homepage /> */}
        {/* <Products /> */}
        {/* <ProductDetails />   */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDertails/> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
