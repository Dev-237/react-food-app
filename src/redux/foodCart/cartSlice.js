import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems : [],
    totalQuantity : 0,
    totalPrice : 0,
    deliveryCharges : 0,
    totalAmount : 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState ,
    reducers : {
            addItems(state,actions){
                
                const item = actions.payload;
                const isItemExist = state.cartItems.find((ele) => ele.id === item.id);
                let sum = 0;

                if(isItemExist){
                    state.cartItems.forEach((i) => {
                        if(i.id === item.id) i.product_quantity++;
                        sum +=  parseInt(i.product_price)*i.product_quantity;
                    })
                }

                else{
                    state.cartItems.push(item);
                    state.totalQuantity++;
                    state.cartItems.forEach(i => sum +=  parseInt(i.product_price)*i.product_quantity);
                }

                state.totalPrice = sum;
                state.deliveryCharges = sum>300 ? 20 : 0;
                state.totalAmount = state.totalPrice + state.deliveryCharges;
                
            },

            decrementQuantity(state,actions){
                const item = actions.payload;
                const isItemExist = state.cartItems.find((ele) => ele.id === item.id);
                let sum = 0;

                if(isItemExist){
                    if(item.product_quantity > 1){
                        state.cartItems.forEach((i) => {
                        if(i.id === item.id) i.product_quantity--; 
                        sum +=  parseInt(i.product_price)*i.product_quantity;
                        state.totalPrice = sum;
                        state.deliveryCharges = sum>300 ? 20 : 0;
                        state.totalAmount = state.totalPrice + state.deliveryCharges;
                    })
                    }
                }
                
            },


            removeItems(state,actions){
                const item = actions.payload;
                state.cartItems = state.cartItems.filter(i => i.id !== item.id)
                state.totalQuantity--;
                state.totalPrice = state.totalPrice - parseInt(item.product_price)*item.product_quantity;
                state.deliveryCharges = state.totalPrice>300 ? 20 : 0;
                state.totalAmount = state.totalPrice + state.deliveryCharges;

            }
    }
})


export const { addItems , decrementQuantity,removeItems} = cartSlice.actions;
export default cartSlice.reducer;


