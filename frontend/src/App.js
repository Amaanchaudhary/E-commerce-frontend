import './App.css';
import Navigation from './customer/components/Navigation/Navigations';
import Homepage from './customer/pages/Homepage/Homepage';

function App() {
  return (
    <div className="">
      <Navigation/>
       <div>
          <Homepage/>
       </div>
    </div>
  );
}

export default App;
