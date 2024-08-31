import React from 'react';
import { Link } from 'react-router-dom';
import useSearchResults from '../../hooks/useSearchResults';
import { colors } from '../../constant/colors';

const SearchResults: React.FC = () => {
    const { results, query } = useSearchResults();

    return (
        <div>
            <div className="lg:mx-[80px] lg:mb-[46px] lg:mt-[46px] my-[57px] mx-[20px] relative">
                <div className="lg:mb-[14px]">
                    <h1 className={`font-roboto text-[15px] font-[500] leading-[10.95px] ${colors.textBlack} hidden lg:block`}>
                        Showing search results for: {query}
                        <span className={`"font-roboto text-[20px] font-[500] leading-[14.6px] ${colors.textGray}`}></span>
                    </h1>
                </div>
                <div className="lg:pt-[20px] relative">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-[31px] sm:gap-y-[20px] gap-x-[20px] sm:gap-x-[20px] relative">
                        {results.map((movie) =>
                            movie?.poster_path !== null ? (
                                <Link key={movie?.id} to={`/movie/${movie?.id}`}>
                                    <div className="relative">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                                            alt={movie?.title}
                                            className="rounded-[20px] object-cover w-full h-full"
                                        />
                                        <div className={`absolute top-[17px] left-[12px] ${colors.textColor} font-caros-bold text-[15px] font-semibold leading-[9.24px] text-left`}>
                                            <i className={`fa-solid fa-star ${colors.reviewStar}`}></i> {movie?.vote_average?.toFixed(1)}
                                        </div>
                                    </div>
                                </Link>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
