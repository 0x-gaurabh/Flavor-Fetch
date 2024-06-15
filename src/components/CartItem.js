import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeCart } from "../redux/slices/CartSlice";
import { increment } from "../redux/slices/CartSlice";
import { decrement } from "../redux/slices/CartSlice";
const CartItem = ({id, name, des, price, img, rating,qty}) => {

  const dispatch=useDispatch()
//  console.log(id);

  
  return (
    <div className="flex  gap-2 shadow-md mb-3 rounded-lg  p-2">
        <MdDelete onClick={() => dispatch(removeCart({id, name, des, price, img, rating,qty}))
      
      } className="absolute right-7 cursor-pointer text-[19px]" />
      <img
        className="w-[50px] h-[50px]"
        src={img}
        alt=""
      />
      <div className="leading-5 ">
        <h2 className="font-bold text-gray-600">{name}</h2>
        <div className="flex justify-between ">
            <span className=" text-lime-700  font-bold ">₹ {price*qty}</span>
            <div  className="flex gap-2 absolute right-7">

          <FaMinus onClick={() => qty >1 ? dispatch(decrement({id})): dispatch(removeCart({id, name, des, price, img, rating,qty}))} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-400 hover:border-none rounded-md cursor-pointer duration-500 ease-in-out p-1 text-xl transition-all" />
        <div>

          <p>{qty}</p>
        </div>
          <FaPlus onClick={() =>dispatch(increment({id}))} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-400 hover:border-none rounded-md cursor-pointer duration-500 ease-in-out p-1 text-xl transition-all" />
        </div>
            </div>
      </div>
    </div>
  );
};

export default CartItem;
