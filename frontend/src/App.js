import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigations';
import Homepage from './customer/pages/Homepage/Homepage';
import Products from './customer/components/Product/Products'
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';

function App() {
  return (
    <div className="">
      <Navigation />
      <div className='pt-5'>
        {/* <Homepage /> */}
        {/* <Products /> */}
        {/* <ProductDetails />   */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
