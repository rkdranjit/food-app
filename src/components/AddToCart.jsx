import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

function AddToCart({id,name,price,image,quantity}) {
  const dispatch = useDispatch();
  return (
    <div className='w-full h-[110px] p-2 shadow-lg rounded-md flex justify-between'>
      <div className='w-[60%] h-full flex gap-4'>
        <div className='w-[50%] h-full overflow-hidden rounded-lg'>
          <img src={image} alt="" className='object-cover' />
        </div>
        <div className='w-[50%] h-full flex flex-col gap-2'>
          <div className='text-[14px] text-gray-500 font-semibold'>{name}</div>
          <div className='w-[70px] h-[25px] bg-slate-300 flex rounded-md overflow-hidden shadow-lg font-semibold border-2 border-green-200 text-[15px]'>
            <button className='w-[30%] h-full bg-white text-green-300 flex justify-center items-center hover:bg-gray-200'                 onClick={()=>quantity>1 ? dispatch(DecrementQty(id)): 1}>-</button>
            <span className='w-[40%] h-full bg-slate-100 text-green-300 flex justify-center items-center'>{quantity}</span>
            <button className='w-[30%] h-full bg-white text-green-300 flex justify-center items-center hover:bg-gray-200' onClick={()=>dispatch(IncrementQty(id))}>+</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-5'>
        <span className='text-green-400 font-semibold text-[14px]'>Rs {price}/-</span>
        <RiDeleteBin6Line className='w-[20px] h-[17px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))} />
      </div>
    </div>
  )
}

export default AddToCart
