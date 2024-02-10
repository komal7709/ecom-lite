import { createSlice } from "@reduxjs/toolkit";
import { addProduct, delteProduct, getProduct, updateProduct } from "../actions/productAction";
import { PRODUCT } from "../../types/Product";

type State = {
    loading?: boolean
    error?: string
    productAdded?: boolean
    productUpdated?: boolean
    productDelected?: boolean
    products?: PRODUCT[]

}
const initialState: State = {}
const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(addProduct.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.productAdded = true
        })
        .addCase(addProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload as string
        })
        .addCase(getProduct.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.products = payload

            state.productAdded = false
            state.productUpdated = false
            state.productDelected = false
        })
        .addCase(getProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload as string
        })
        .addCase(updateProduct.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.productUpdated = true
        })
        .addCase(updateProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload as string
        })
        .addCase(delteProduct.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(delteProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.productDelected = true
        })
        .addCase(delteProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload as string
        })

})

export default productSlice.reducer