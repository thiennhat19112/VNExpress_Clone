import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apigetData } from "apis/getapi";
import tmdbApi from "apis/tmdbApi";
import { responeHttp } from "lib/models/interface";



export const getListTop = createAsyncThunk('movie/getMovieTopRate',async (thunkApi)=>{
    const response = await  tmdbApi.getMoviesList("top_rated", {})
    
    return response;
})

export const getDetailNew = createAsyncThunk('movie/getDetailMovie', async (payload:{id:number | string} ,thunkApi) => {
    console.log("🚀 ~ file: get-list-top.action.ts:15 ~ getDetailNew ~ payload:", payload)
    const response = await tmdbApi.detail("movie",+ payload.id,{})
    return response
})