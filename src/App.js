
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Booking from './Pages/Booking';
import Prices from './Pages/Prices';
import Navbar from './Components/Navbar';


function App() {
  return (
      <div>
        <Navbar />
        <div className='page-contents'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/prices' element={<Prices/>}/>
          </Routes>
        </div>

      </div>
      



    
  );
}

export default App;
