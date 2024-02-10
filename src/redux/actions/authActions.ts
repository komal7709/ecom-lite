import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { USER } from "../../types/User";

export const login = createAsyncThunk(
    "login",
    async (userData: { email: string, password: string }, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/users")
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const register = createAsyncThunk(
    "register",
    async (userData: USER, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/user", { userData, active: true })
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })