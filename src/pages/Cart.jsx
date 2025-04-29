import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
const Cart = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
       <img src="/public/assets/abandoned-cart.png" alt="" />
         <p className='text-2xl text-center font-bold text-red-900 mt-4'>
            Looks like you've not added anything! Don't make the cart sad! <br /> Go and explore our top excusive offers only for you
            </p>
            <button className='bg-red-900 text-white font-bold text-lg px-4 py-2 rounded-lg mt-4 hover:bg-red-800 active:translate-y-1 transform transition-transform duration-300 hover:scale-105'>
                <Link to="/">
                Hurry up! Shop Now
                </Link>
            </button>
    </div>
  )
}

export default Cart