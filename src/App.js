import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/navbar';
import About from './components/pages/About';
import Booking from './components/pages/Bookings';
import News from './components/pages/News';
import Login from './components/auth/Signin';
import BandPage from './components/pages/hidden/BandPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/bookings' element={<Booking/>} />
        <Route path='/sounds-of-swing-news' element={<News/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/band-page' element={<BandPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
