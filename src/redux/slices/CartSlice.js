import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const CartSlice =createSlice({
    name:'cart',
    initialState:{
        cart:[],
        },
        reducers:{
            addToCart: (state,action) =>{

                const exsit=state.cart.find((item) =>item.id === action.payload.id)
                if(exsit){
                    state.cart=state.cart.map((item) =>item.id === action.payload.id ? {...item,qty:item.qty+1} :item )
                }else{

                    state.cart.push(action.payload)
                }
            
            toast.success('Item added to cart', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              
                });
        },
        removeCart :(state,action) =>{
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);    
            toast.success(`${action.payload.name} removed succesfully`, {
                position: "top-right", 
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });
        },
        increment :(state,action) =>{
            state.cart=state.cart.map((item) => item.id === action.payload.id ?{...item , qty: item.qty+1}: item )
        },
        decrement :(state,action) =>{

            state.cart=state.cart.map((item) => item.id === action.payload.id ?{...item , qty:item.qty-1}: item )
        },

    }
})

export const { addToCart, removeCart,increment,decrement } = CartSlice.actions;
export default CartSlice.reducer;