import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload)
      state.items.push({...action.payload, quantity:1})
      console.log("store:"+state.items)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item)=> item.name !== action.payload.name)
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload
      const existingCartItem = state.items.find(item=> item.name === name)
      if (existingCartItem){
        existingCartItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
