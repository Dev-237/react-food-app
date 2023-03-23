import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './foodCart/cartSlice'


const  store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})


export default store;