import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import restaurantReducer from './features/restaurantSlice'
import locationReducer from './features/locationSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    location: locationReducer,
  },
})
