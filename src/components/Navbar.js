import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [date, setDate] = useState('')
    const [value, setValue] = useState('')
    const navigate =useNavigate()
    
    setTimeout(() =>{
        const a=new Date().toUTCString().slice(0, 25)
        setDate(a)
    },1000)
   
    const handleSearch =() =>{
         navigate(`/search/${value}`)
    }

    const handleMenu =() =>{
      navigate('/fooditem')
    }

  return (
    <nav className="flex flex-col lg:flex-row justify-between mt-4 mb-10 mx-6">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {date}
        </h3>
        <h1 onClick={handleMenu} className="text-2xl cursor-pointer hover:text-gray-500 font-bold">Flavor Fetch</h1>
      </div>
      <div className="flex gap-3">
        <div className=" mt-1  ">
      <button  onClick={handleSearch}  className=" px-2  py-2  bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            <CiSearch className="  " />
           
        </button>
        </div>
        <input
          className="p-1 h-[40px] border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[300px] "
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search here"
          autoComplete="off"
        />
      </div>
    </nav>
  );
};

export default Navbar;
