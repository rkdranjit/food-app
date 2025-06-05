import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name:"cart",
  initialState:[],
  reducers:{
      AddItem:(state,action)=>{
        const existedItem = state.find((item)=>item.id === action.payload.id)
        if(existedItem){
          return state.map((item)=>item.id === action.payload.id?{...item,quantity:item.quantity+1}:item)
        }else{
          state.push(action.payload)
        }
      },
      RemoveItem:(state,action)=>{
        return state.filter((item)=>item.id !== action.payload)
      },
      IncrementQty:(state,action)=>{
        return state.map((item)=>item.id === action.payload?{...item,quantity:item.quantity+1}:item)
      },
      DecrementQty:(state,action)=>{
        return state.map((item)=>item.id === action.payload?{...item,quantity:item.quantity-1}:item)
      }
  }
})
export const {AddItem,RemoveItem,IncrementQty,DecrementQty} = cartSlice.actions;
export default cartSlice.reducer;