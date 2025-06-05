import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

export default function Nav() {

  const {input,setInput,category,setCategory,showCart,setShowCart} = useContext(dataContext);
  const items = useSelector(state => state.cart);

  useEffect(()=>{
    const searchFilter = food_items.filter((item)=>item.food_name.toLowerCase().includes(input));
    setCategory(searchFilter);
  },[input])

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      <div className='w-[55px] h-[55px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <MdFastfood  className='w-[30px] h-[30px] text-green-600'/>
      </div>
      <form className='w-[45%] h-[50px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]' onSubmit={(e)=>e.preventDefault}>
        <IoSearch className=' text-green-600 w-[20px] h-[20px] ' />
        <input type="text" placeholder='search here..' className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
      <div className='w-[55px] h-[55px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{setShowCart(true)}}>
        <span className='absolute top-0 right-2 text-green-600 font-semibold text-[16px]'>{items.length}</span>
        <FiShoppingBag className='w-[30px] h-[30px] text-green-600'/>
      </div>
    </div>
  )
}
