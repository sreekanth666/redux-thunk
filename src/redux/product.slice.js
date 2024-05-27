import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        allProducts: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.allProducts = action.payload
        }
    }
})

export const { setProducts } = productSlice.actions
export default productSlice.reducer