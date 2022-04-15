import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import ServiceBookingDetails from './Pages/Home/ServiceBookingDetails/ServiceBookingDetails';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>} />
        <Route path='/ServiceBookingDetails' element={
            <ServiceBookingDetails></ServiceBookingDetails>
        } />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
