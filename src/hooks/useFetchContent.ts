import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/slice/CardSlice';
import { fetchSeries } from '../store/slice/SeriesSlice';
import { RootState, AppDispatch } from '../store/Store';

export const useFetchContent = (type: 'movie' | 'series') => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, status, error } = useSelector((state: RootState) =>
    type === 'movie' ? state.movie : state.series
  );

  useEffect(() => {
    if (type === 'movie') {
      dispatch(fetchMovies());
    } else {
      dispatch(fetchSeries());
    }
  }, [dispatch, type]);

  return { items, status, error };
};
