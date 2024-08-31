import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/axiosIntance";
import { initialState } from "../../type/type";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await AxiosInstance.get("/movie/popular", {
      params: { language: 'en-US' },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
});

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  }
});

export default movieSlice.reducer;











