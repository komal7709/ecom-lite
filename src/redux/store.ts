import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";
import adminSlice from "./slices/adminSlice";


const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
        stock: productSlice,
        admin: adminSlice
    },
})
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch

export default reduxStore