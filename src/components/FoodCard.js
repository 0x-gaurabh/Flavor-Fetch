import React from "react";
import { FaStar } from "react-icons/fa";
 import { useDispatch } from "react-redux";
 import { addToCart } from "../redux/slices/CartSlice";
 
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 

const FoodCard = ({ id, name, des, price, img, rating }) => {
    const dispatch = useDispatch();
  return (
    <>
    
    
    <div className="font-bold w-[300px] bg-white rounded-lg p-9  gap-2 flex flex-col ">
      <img
        className="w-auto h-[130px] hover:scale-110 transition-all duration-500 ease-in-out my-3"
        src={img}
        alt=""
      />
      <div className="bg-white text-sm flex justify-between mb-2">
        <h2 className="bg-white ">{name}</h2>
        <span className="bg-white text-lime-700 px-3 py-1 border border-lime-700 rounded-full shadow-sm hover:bg-lime-700 hover:text-white transition duration-300 ease-in-out">
          ₹{price}
        </span>
      </div>
      <p className="text-sm font-normal bg-white">{des.slice(0, 50)}...</p>
      <div className="bg-white flex justify-between mt-2">
        <span className="bg-white flex justify-center items-center">
          <FaStar className="bg-white mr-1 text-yellow-500" /> {rating}
        </span>
        <button onClick={() =>dispatch(addToCart({ id, des,img,name,price,rating,qty:1}))}
         
          className=" bg-white px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white  rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          Add to cart
        </button>
      </div>
    </div>
    </>
  );
};

export default FoodCard;
