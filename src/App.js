import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import BookingPage from './Components/BookingPage';
import OrderOnline from './Components/OrderOnline';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='header-part'>
        <Header />
        <Nav />
      </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/Reservations" element={<BookingPage />}></Route>
          <Route path="/OrderOnline" element={<OrderOnline />}></Route>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
