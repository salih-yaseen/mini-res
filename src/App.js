import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import Navbar from './Compenents/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
