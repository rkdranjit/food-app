import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import Categories from '../Categories'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import AddToCart from '../components/AddToCart'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

export default function Home() {
  const {category,setCategory,input,showCart,setShowCart} = useContext(dataContext);

  const items = useSelector(state => state.cart);

  function categoryFilter(categories){
    if(categories === "All"){
      setCategory(food_items);
    }else{
      let newCategory = food_items.filter((item)=>(item.food_category === categories));
      setCategory(newCategory);
    }
  }

  // Price Section Total Amount
  const totalPrice = items.reduce((total,itemPrice)=>total+itemPrice.quantity * itemPrice.price,0);
  console.log(totalPrice);
  const deliveryFee = 20;
  const taxes = totalPrice*0.5/100;
  const grandTotal = Math.floor(totalPrice+deliveryFee+taxes);

  return (
    <div className='w-full min-h-screen bg-slate-200'>
      <Nav />
      {!input ?
        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
          {Categories.map((item)=>(
            <div key={item.id} className='w-[110px] h-[100px] bg-white flex flex-col items-center justify-center text-[15px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-300 cursor-pointer transition-all duration-200' onClick={()=>categoryFilter(item.name)}>
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
          :
        null
      }
      
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-6 pb-5'>

        {category.length > 1 ?
          category.map((item)=>(
          <Card name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} id={item.id} />
        ))
        :
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="text-2xl text-green-500 font-semibold text-center">
              No Dish Found
            </div>
          </div>

        }
        
      </div>
      <div className={`w-full md:w-[30vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header section order item */}
        <header className='w-[100%] flex justify-between items-center mb-6'>
          <span className='text-green-500 text-[12px] font-semibold md:text-[18px]'>Order Items</span>
          <RxCross2 className='text-green-500 text-[12px] font-semibold right-5 w-[30px] h-[30px] cursor-pointer hover:text-red-500 md:text-[18px]' onClick={()=>setShowCart(false)} />
        </header>
        {/* <AddToCart /> */}
        {items.length > 0 ? 
          <>
            <div className='w-full mt-4 flex flex-col gap-3'>
          {items.map((item)=>(
            <AddToCart name={item.name} price={item.price} image={item.image} id={item.id} quantity={item.quantity} />
          ))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-300 mt-6 p-3 flex flex-col gap-1'  >
            <div className='w-full flex justify-between items-center'>
              <span className='text-[15px] text-gray-500 font-semibold'>Subtotal :</span>
              <span className='text-green-400 font-semibold'>{totalPrice}/-</span>
            </div>
            <div className='w-full flex justify-between items-center'>
              <span className='text-[15px] text-gray-500 font-semibold'>Delivery Fee :</span>
              <span className='text-green-400 font-semibold'>{deliveryFee}/-</span>
            </div>
            <div className='w-full flex justify-between items-center'>
              <span className='text-[15px] text-gray-500 font-semibold'>Taxes:</span>
              <span className='text-green-400 font-semibold'>{taxes}/-</span>
            </div>
            
        </div>
        <div className='w-full flex justify-between items-center mt-3 p-2 text-xl'>
              <span className=' text-gray-500 font-semibold'>Total:</span>
              <span className='text-green-400 font-semibold'>{grandTotal}/-</span>
        </div>
        <button className='w-full p-2 rounded-lg bg-green-400 text-white hover:bg-green-600 transition-all' onClick={()=>{toast.success("Order Placed....")}}>Place Order</button>
          </>
        :
        <div className='text-center text-2xl text-green-500 font-semibold pt-5'>
          Empty Cart
        </div>
        }
        
      </div>
    </div>
  )
}
