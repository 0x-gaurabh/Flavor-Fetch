import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activercart, setActivercart] = useState(false)
   const itemcart =useSelector((state) =>state.cart.cart)

   
   const totalprice =itemcart.reduce((acc,item) => acc+item.price *item.qty ,0)
   const navigate=useNavigate()

   const checkOut =() =>{
    navigate('/check')
    
   }
  
  //  console.log(itemcart);
  return (
    <> 
      <div className={`fixed  bg-white top-0 right-0 w-full lg:w-[20vw] h-full mb-3 p-5 ${activercart ? "translate-x-0" :"translate-x-full"} transition-all duration-500 ease-in-out`}>
        <div className=" flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-600">My Orders</span>
          <IoMdClose onClick={() =>setActivercart(!activercart)} className="border-2 border-gray-600  font-bold p-1 text-xl rounded-md hover:text-red-600 hover:border-red-600 cursor-pointer" />
        </div>
        <div className="max-h-[70vh] overflow-y-auto">
        {
         itemcart.length ===0 ? (<><h1>Cart is Empty</h1>
          <p>Please add some items</p>
          </>
         ):(
           
            itemcart.map((item) =>{
              return  <CartItem className="overflow-hidden" key={item.id} id={item.id} name={item.name} qty={item.qty} price={item.price} des={item.desc} rating={item.rating} img={item.img} />
            })
          
         )
        }
         </div>
        
        <div className="absolute bottom-0">
            <h3 className="font-semibold text-gray-600">Items:</h3>
            <h3 className="font-semibold text-gray-600"  >Total Amount: ₹ {totalprice}</h3>
            <hr className=" w-full lg:w-[18vw] text-3xl text-black "/>
            {
              itemcart.length !==0 && (<button onClick={checkOut} className="bg-green-500 lg:w-[18vw] w-full mt-4 mb-7  hover:bg-green-600 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out">Checkout</button>) 
            }
            {/* <button onClick={checkOut} className="bg-green-500 lg:w-[18vw] w-full mt-4 mb-7  hover:bg-green-600 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out">Checkout</button> */}

        </div>
      </div>
      {!activercart && (
        <FaCartShopping className="fixed rounded-full w-[40px] h-[40px] right-7 top-36 p-2 shadow-md text-5xl cursor-pointer" onClick={() => setActivercart(true)} />
      )}
      
    </>
  );
};

export default Cart;
