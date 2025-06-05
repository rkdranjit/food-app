import React, { createContext, useState } from 'react'
import { food_items } from '../food';
export const dataContext = createContext();

function UserContext({children}) {

  const [input,setInput] = useState("");
  const [category,setCategory] = useState(food_items);
  const [showCart,setShowCart] = useState(false);
  const data = {
    input,
    setInput,
    category,
    setCategory,
    showCart,
    setShowCart
  }
  
  return (
    <div>
      <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider>
    </div>
  )
}

export default UserContext
