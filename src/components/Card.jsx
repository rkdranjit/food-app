import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Card({name,image,price,type,id}) {

  const dispatch = useDispatch();

  return (
    <div className='w-[250px] h-[300px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 transition-all'>
      <div className='w-[100%] h-[65%] overflow-hidden rounded-lg'>
        <img src={image} alt="" className='object-cover' />
      </div>
      <div className='text-xl font-semibold'>
        {name}
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className='text-base font-bold text-green-500'>Rs {price}</div>
        <div className='flex justify-center items-center gap-2 text-green-500 text-base font-semibold'>      {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}<span>{type}</span></div>
      </div>
      <button className='w-full p-2 rounded-lg bg-green-400 text-white hover:bg-green-600 transition-all' onClick={()=>{dispatch(AddItem({id:id, name:name,price:price,image:image,quantity:1})); toast.success("Item Added...")}} >Add To Dish</button>
    </div>
  )
}

export default Card;
