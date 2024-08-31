import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/axiosIntance"; 
import { SeriesState } from '../../type/type';

const initialState: SeriesState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchSeries = createAsyncThunk("series/fetchSeries", async () => {
  const response = await AxiosInstance.get("/tv/popular?language=en-US");
  return response.data.results;
});

const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSeries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  }
});

export default seriesSlice.reducer;
