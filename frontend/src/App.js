import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigations';
import Homepage from './customer/pages/Homepage/Homepage';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <Homepage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
