import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import Season from '../../component/season/Season';
import { Genre } from '../../type/type';
import { colors } from '../../constant/colors';
import { override } from '../../constant/colors';
import { useFetchDetails } from '../../hooks/useFetchDetails';

const Movie: React.FC = () => {
  const [loading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const { movieDetails, status, error } = useFetchDetails(id);

  if (status === 'loading') {
    return (
      <p className={`fixed inset-0 flex items-center justify-center ${colors.bgColor} bg-opacity-80 z-50`}>
        <HashLoader cssOverride={override} size={150} color={"#000"} loading={loading} />
      </p>
    );
  }

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

  if (status === 'succeeded' && movieDetails) {
    const trailer = movieDetails.videos;

    const reviewFormate = (count: number) => {
      if (count >= 1000 && count <= 1000000) {
        return `${(count / 1000).toFixed(1)}k`
      } else if (count >= 1000000) {
        return `${(count / 1000000).toFixed(1)}M`
      } else {
        return count.toString()
      }
    }

    return (
      <div>
        <div className="md:mx-[80px] md:mb-[85px] mx-[20px] my-[43px]">
          <div className="flex items-center justify-between w-full ">
            <div className={`font-roboto  font-[700]  md:text-[40px] md:max-w-[251px] max-w-[218px] text-[30px] md:leading-[46.88px] leading-[35.16px] display-contents`} >
              <h1 className=' md:mt-[26px]'>{movieDetails?.title}</h1>
            </div>
            <div className={`hidden lg:flex ${colors.bgMovieColor} rounded-[30px] md:mt-[26px]`}>
              <Link to={""}
                className="flex items-center font-roboto font-[500] text-[15px] leading-[17.58px] py-[11px] px-[30px]"
              >
                <i className="fa-solid fa-bookmark mr-2"></i>
                Add to watchlist
              </Link>
            </div>
          </div>

          <div className="relative flex items-center flex-col lg:flex-row md:pt-[27px] pt-[24px] lg:pb-[51px] pb-[40px] justify-between w-full">
            <div className="absolute z-50 order-2 lg:order-1 lg:relative md:top-28 md:left-8 top-[88px] left-[19px] lg:left-0 lg:top-0">
              <img
                src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`}
                alt="#"
                className="lg:h-[291px] lg:w-[196px] md:w-[140px] md:h-[187px] w-[98px] h-[146px] order-2 rounded-[20px] object-cover"
              />
            </div>

            <div className="relative order-3 lg:order-2 flex-grow lg:pl-5 pl-0 mt-[54px] lg:mt-0 w-full lg:w-auto shrink-div">
              <div className="flex space-x-5">
                {movieDetails?.genres?.slice(0, 2).map((genre: Genre) => (
                  <Link
                    key={genre.id}
                    to=""
                    className={`font-roboto genre-link font-[500] text-[18px] leading-[21.09px] py-[6px] px-[18px] rounded-[20px] border ${colors.borderColor}`}
                  >
                    {genre.name}
                  </Link>
                ))}
              </div>

              <div className="w-full lg:w-[413px] lg:mt-[19px] lg:mb-12 mt-[27px] mb-[54px] shrink-div">
                <p className="font-roboto font-[500] text-[18px] leading-[21.09px]">
                  {movieDetails?.overview}
                </p>
              </div>

              <div className="flex items-center font-roboto text-[15px] font-[400] space-x-[15px]">
                <div className="leading-[21.09px]">
                  <p className="text-[18px]">IMDB Rating</p>
                  <p className="leading-[17.58px] text-center font-roboto text-[15px] font-[400]">
                    <i className={`fa-solid fa-star ${colors.reviewStar} `}></i> {(movieDetails?.vote_average?.toFixed(1))}
                    <span className={`${colors.textDarkGray} leading-[14.06px] text-[12px]`}>
                      /10
                    </span>
                  </p>
                </div>
                <div className={`leading-[17.58px] text-[15px] ${colors.textDarkGray}`}>
                  <p>{reviewFormate(movieDetails?.vote_count || 0)} Reviews</p>
                </div>
              </div>
            </div>

            <div className="relative z-40 order-1 lg:order-3">
              <iframe
                title="YouTube Trailer"
                className="tailer-card lg:h-[291px] lg:w-[521px] md:w-[80vw] md:h-[250px] w-[90vw] order-1 h-[187px] rounded-[20px]"
                src={`https://www.youtube.com/embed/${trailer && trailer.length > 0 ? trailer[0].key : ""}?autoplay=0&modestbranding=1&controls=1&showinfo=0&rel=0`}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-x-0 md:space-x-[30px] font-roboto font-[700]">
            <h2 className="text-[30px] leading-[35.16px] mb-4 md:mb-0">Seasons</h2>
            <div className="flex flex-wrap md:flex-nowrap space-x-[7.73px]">
              <span className={`cursor-pointer rounded-[10px] py-[10px] px-[15.30px] ${colors.bgMovieColor} text-[20px] leading-[23.44px] mb-2 md:mb-0`}>
                1
              </span>
              <span className={`cursor-pointer rounded-[10px] py-[10px] px-[15.30px] ${colors.bgMovieColor} text-[20px] leading-[23.44px] mb-2 md:mb-0`}>
                2
              </span>
              <span className={`cursor-pointer rounded-[10px] py-[10px] px-[15.30px] ${colors.bgMovieColor} text-[20px] leading-[23.44px] mb-2 md:mb-0`}>
                3
              </span>
              <span className={`cursor-pointer rounded-[10px] py-[10px] px-[15.30px] ${colors.bgMovieColor} text-[20px] leading-[23.44px] mb-2 md:mb-0`}>
                4
              </span>
            </div>
          </div>

          <Season type='movie' />
        </div>
      </div>
    );
  }

  return null;
};

export default Movie;
