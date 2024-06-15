import React from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const navigate =useNavigate()
    const handle =() =>{
        navigate('/')
    }
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-green-500 text-white text-center py-4 text-2xl font-bold">
          Thank You!
        </div>
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Your order has been placed successfully.</h2>
          <p className="text-gray-700 mb-6">We appreciate your purchase and your order will be delivered soon.</p>
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <button onClick={handle} className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
            Continue odering
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Checkout
