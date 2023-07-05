import React from 'react'
import '../styles/App.css';
import Navbar from './NavBar/Navigation'
import MainPage from './MainBody/MainPage';
import DisplayContent from './DisplayContent/DisplayContent';
import PlaceOrder from './PlaceOrder/PlaceOrder';
import CheckOut from './Checkout/CheckOut';
import CartContextProvider from './CartContext';
import LogIn from './NavBar/LogIn';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Footer from './Footer/Footer';
import Layout from './Layout';


const App = () => {

  return (
    <>
    
    <Router basename='/'>
    <div>
    <CartContextProvider>
    
    <Routes> 
       {/* <Route path="/" element={[<Navbar/>, <MainPage />, <Footer/>]}/>
       <Route path="/login" element={<LogIn />}/>
       <Route path='/checkout' element={[<Navbar/>, <CheckOut/>, <Footer/>]}/>
       <Route path='/display' element={[<Navbar/>, <DisplayContent/>, <Footer/>]}/>
       <Route path='/order/:id' element={[<Navbar/>, <PlaceOrder/>, <Footer/>]}/> */}
       <Route path='/' element={<Layout><MainPage/></Layout>}/>
       <Route path='/login' element={<LogIn/>}/>
       <Route path='/checkout' element={<Layout><CheckOut/></Layout>}/>
       <Route path='/display' element={<Layout><DisplayContent/></Layout>}/>
       <Route path='/order/:id' element={<Layout><PlaceOrder/></Layout>}/>
    </Routes>
    
    </CartContextProvider>
    </div>
    </Router>
    </>
  )
}

export default App;
