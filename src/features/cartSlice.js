import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (!action.payload) return;
            state.cart.push(action.payload)
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        increment: (state, action) => {
            const product = state.cart.find(p => p.id == action.payload)
            product.quantity += 1
            localStorage.setItem("cart", JSON.stringify(state.cart))


        },
        decrement: (state, action) => {
            const product = state.cart.find(p => p.id == action.payload)
            if (product.quantity > 1) {
                product.quantity -= 1
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))

        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((product) => product.id != action.payload)
            localStorage.setItem("cart", JSON.stringify(state.cart))

        },
        checkout: (state) => {
            state.cart = []
            localStorage.setItem("cart", JSON.stringify(state.cart))
        }
    }
})

export const { addToCart, increment, decrement, removeFromCart, checkout } = cartSlice.actions
export default cartSlice.reducer