import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHook';
import { fetchMovies } from '../store/slice/CardSlice';
import { fetchSeries } from '../store/slice/SeriesSlice';
import { RootState } from '../store/Store';

const useFetchItems = (type: 'movie' | 'series') => {
  const dispatch = useAppDispatch();

  const { items, status, error } = useAppSelector((state: RootState) =>
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

export default useFetchItems;
