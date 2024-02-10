import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/authActions";
import { USER } from "../../types/User";


type State = {
    loading?: Boolean,
    error?: string,
    registered?: boolean,
    user?: USER
}
const initialState: State = {}
const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(register.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(register.fulfilled, (state, { payload }) => {
            state.loading = false
            state.registered = true
        })
        .addCase(register.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload as string
        })
        .addCase(login.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(login.fulfilled, (state, { payload }) => {
            state.loading = false
            state.user = payload
        })
        .addCase(login.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload as string
        })

})

export default authSlice.reducer