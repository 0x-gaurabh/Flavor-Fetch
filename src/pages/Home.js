import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import FoodData from '../data/FoodData'
 import { Routes ,Route, useNavigate } from 'react-router-dom'
import SearchItem from './SearchItem'

const Home = () => {
  const [data, setdata] = useState(FoodData)
  // console.log(data);  
const navigate =  useNavigate()

  useEffect(() =>{
      navigate('/fooditem')

  },[])
  return (
  <>
  <ToastContainer
position="top-center"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
  <Navbar />
  <Menu data={data}  setdata={setdata} />
  <Routes>
  {/* <Route path="/" element={<Menu data={data} setdata={setdata} />} /> */}

  <Route path='/search/:term' element={ <SearchItem />} />
  <Route path='/fooditem' element={<FoodItem  data={data} />}/>
  </Routes>
  <Cart />
  </>
  )
}

export default Home
