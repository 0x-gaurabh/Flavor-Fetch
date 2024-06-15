import React from 'react'
import FoodCard from './FoodCard'
// import FoodData  from '../data/FoodData'

const FoodItem = ({data}) => {




  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
        {data.map((food) =>{
            return <FoodCard key={food.id} id={food.id} name={food.name} price={food.price} des={food.desc} rating={food.rating} img={food.img}/>

        })}
    </div>
  )
}

export default FoodItem
