import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Succes from './pages/Succes';
import Error from './pages/Error';
import Checkout from './pages/Checkout';
import SearchItem from './pages/SearchItem';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='*' element={<Home />} />
    <Route path='/succes' element={<Succes />} />
    <Route path='/*' element={<Error />} />
    <Route path='/check' element={<Checkout />} />
    

   </Routes>
   </BrowserRouter>
  );
}

export default App;
