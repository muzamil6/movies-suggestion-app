import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from '../../type/type';
import { colors } from '../../constant/colors';
import useFetchItems from '../../hooks/useFetchItems';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Keyboard, Mousewheel } from 'swiper/modules';

const Card: React.FC<CardProps> = ({ type, showReview }) => {
  const { items, status, error } = useFetchItems(type);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && (
        <p className={`flex items-center justify-center ${colors.bgColor} bg-opacity-80 z-50`}>
          Error: {error}
        </p>
      )}

      {status === 'succeeded' && (
        <Swiper
          spaceBetween={22}
          slidesPerView={'auto'}
          freeMode={true}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          modules={[Keyboard, Mousewheel]}
        >
          {items.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ width: 'auto' }}
            >
              <Link
                to={`/${type === 'movie' ? 'movie' : 'series'}/${item.id}`}
                className="flex-none transition-transform duration-200 relative rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="rounded-[20px] object-cover w-[158px] h-[234px] md:w-[177px] md:h-[263px]"
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt=""
                />
                {showReview && (
                  <div className={`absolute top-0 bg-opacity-75 w-full ${colors.textColor} text-left p-2`}>
                    <p>
                      <i className={`fas fa-star ${colors.reviewStar} mr-1`} />
                      {item.vote_average.toFixed(1)}
                    </p>
                  </div>
                )}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Card;
