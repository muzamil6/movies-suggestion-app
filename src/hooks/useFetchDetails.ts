import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../store/slice/DetailMovie';
import { RootState, AppDispatch } from '../store/Store';

export const useFetchDetails = (id: string | undefined) => {
  const dispatch = useDispatch<AppDispatch>();

  const { movieDetails, status, error } = useSelector((state: RootState) => state.detail);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }
  }, [dispatch, id]);

  return { movieDetails, status, error };
};
