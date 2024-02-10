import { createSlice } from "@reduxjs/toolkit";
import { getUser, toggleUser } from "../actions/adminAction";
import { USER } from "../../types/User";

type State = {
    loading?: Boolean,
    error?: string,
    toggle?: boolean,
    user?: USER[]
}
const initialState: State = {}
const adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.user = payload
            state.toggle = false
        })
        .addCase(getUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload as string
        })
        .addCase(toggleUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(toggleUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.toggle = true
        })
        .addCase(toggleUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload as string
        })

})

export default adminSlice.reducer