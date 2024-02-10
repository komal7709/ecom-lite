import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { PRODUCT } from "../../types/Product";

export const getProduct = createAsyncThunk(
    "getProduct",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/products")
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const addProduct = createAsyncThunk(
    "addProduct",
    async (productData: PRODUCT, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/products", productData)
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const updateProduct = createAsyncThunk(
    "updateProduct",
    async (productData: PRODUCT, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.put(`/products/${productData.id}`, productData)
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const delteProduct = createAsyncThunk(
    "delteProduct",
    async (id: number, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete(`/products/${id}`)
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })