import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FoodData from '../data/FoodData'
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { FaStar } from "react-icons/fa";


const SearchItem = () => {
    const {term} =useParams()
    const [product, setProduct] = useState([])
    const dispatch = useDispatch();

     useEffect(() =>{
         const filterData =FoodData.filter((item) => item.desc.toLowerCase().includes(term.toLocaleLowerCase()))
         setProduct(filterData)
         },[term])
        //   console.log(product);
         return (
            <>
            {
                product.length === 0 ?(<h1 className=' text-center font-bold  text-3xl '>Item Not found</h1>) :(
                
                <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
                {
                    product.map((item) => {
                        return (
                            <div className="font-bold w-[300px] bg-white rounded-lg p-9  gap-2 flex flex-col ">
                  <img
                    className="w-auto h-[130px] hover:scale-110 transition-all duration-500 ease-in-out my-3"
                    src={item.img}
                    alt=""
                  />
                  <div className="bg-white text-sm flex justify-between mb-2">
                    <h2 className="bg-white ">{item.name}</h2>
                    <span className="bg-white text-lime-700 px-3 py-1 border border-lime-700 rounded-full shadow-sm hover:bg-lime-700 hover:text-white transition duration-300 ease-in-out">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-sm font-normal bg-white">{item.desc.slice(0, 50)}...</p>
                  <div className="bg-white flex justify-between mt-2">
                    <span className="bg-white flex justify-center items-center">
                      <FaStar className="bg-white mr-1 text-yellow-500" /> {item.rating}
                    </span>
                    <button onClick={() =>dispatch(addToCart({ id: item.id,
                                name: item.name,
                                img: item.img,
                                price: item.price,
                                rating: item.rating,
                                qty: 1,}))}
                     
                      className=" bg-white px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white  rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                        )
                    }  )
                }
            </div>
                )
            }
  
</>
  )
}

export default SearchItem
