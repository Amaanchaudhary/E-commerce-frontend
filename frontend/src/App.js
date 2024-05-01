import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigations';
import Homepage from './customer/pages/Homepage/Homepage';
import Products  from './customer/components/Product/Products' 

function App() {
    return (
      <div className="">
        <Navigation />
        <div>
          {/* <Homepage /> */}
          <Products />
        </div>
        <Footer />
      </div>
    );
  }

export default App;
