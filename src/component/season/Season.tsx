import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchContent } from '../../hooks/useFetchContent'
import { CardProps } from '../../type/type';
import { colors } from '../../constant/colors';

const Season: React.FC<CardProps> = ({ type, showReview }) => {
  const { items, status, error } = useFetchContent(type);
  if (status === 'failed') {
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 text-center">
          {error || 'No Content Found'}
        </p>
        <Link
          to="/"
          className="px-4 py-2 font-medium rounded-lg transition-all duration-200 ease-in-out"
        >
          Go Back To Home
        </Link>
      </div>
    );
  }
  return (
    <div className='mt-5'>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div className="">
          <div className="flex flex-wrap justify-start mt-[34.73px] gap-[20px]">
            {items?.slice(8, 12).map((item) => (
              <div key={item.id} className='flex flex-col w-full sm:w-[calc(100%-20px)] md:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] h-[202px] rounded-[20px]'>
                <Link to={`/${type === 'movie' ? 'movie' : 'series'}/${item.id}`} className="flex-none transition-transform duration-200 relative rounded-lg overflow-hidden cursor-pointer" >
                  <img className="object-fill h-[142px] w-full rounded-t-[20px]"
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={type === 'movie' ? item.title : item.name} />
                  <div className={`font-roboto font-bold text-base leading-[23.44px] flex items-center ${colors.bgColor} px-[17px] pt-[19px] pb-[18px] `}>
                    <h3 className="line-clamp-2">{type === 'movie' ? item.title : item.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Season;
