import React, { useEffect } from "react";
import FoodData from "../data/FoodData";

const Menu = ({setdata}) => {
  // console.log(data);
     

    
  const handleChange = (category) => {
    if (category === "All") {
      setdata(FoodData);
    } else {
      const filterData = FoodData.filter((item) => item.category === category);
      setdata(filterData);
    }
  };



  return (
    <div className="ml-6 my-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button onClick={() =>handleChange("All")} className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 font-bold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
          All
        </button>
        <button onClick={() =>handleChange("Lunch")} className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 font-bold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
          Lunch
        </button>
        <button onClick={() =>handleChange("Breakfast")} className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 font-bold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
          Breakfast
        </button>
        <button onClick={() =>handleChange("Dinner")} className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 font-bold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
          Dinner
        </button>
        <button onClick={() =>handleChange("Snacks")} className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 font-bold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
          Snacks
        </button>
      </div>
    </div>
  );
};

export default Menu;
