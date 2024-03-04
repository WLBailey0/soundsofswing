import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/navbar';
import About from './pages/About';
import Booking from './pages/Bookings';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/bookings' element={<Booking/>} />
        <Route path='/sounds-of-swing-news' element={<News/>} />
      </Routes>
    </Router>
  );
}

export default App;
