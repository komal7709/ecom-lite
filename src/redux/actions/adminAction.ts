
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { USER } from "../../types/User";

export const getUser = createAsyncThunk(
    "getUser",
    async (userData, { rejectWithValue, getState }) => {
        try {

            const { data } = await api.get("/user")
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const toggleUser = createAsyncThunk(
    "toggleUser",
    async (userData: USER, { rejectWithValue, getState }) => {
        try {

            const { data } = await api.put(`/user/${userData.id}`, userData)
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })