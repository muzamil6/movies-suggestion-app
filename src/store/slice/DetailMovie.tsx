import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../utils/axiosIntance';
import { DetailMovieState } from '../../type/type';

const initialState: DetailMovieState = {
  movieDetails: null,
  status: 'idle',
  error: null,
};

export const fetchMovieDetails = createAsyncThunk('detail/fetchMovieDetails', async (id: string) => {
  const [movieResponse, videoResponse] = await Promise.all([
    AxiosInstance.get(`/movie/${id}?language=en-US`),
    AxiosInstance.get(`/movie/${id}/videos?language=en-US`),
  ]);

  return {
    ...movieResponse.data,
    videos: videoResponse.data.results,
  };
});

const detailMovieSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default detailMovieSlice.reducer;
