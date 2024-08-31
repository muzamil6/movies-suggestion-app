import { colors } from '../../constant/colors';
import SearchIcon from '../../../src/assets/images/searchIcons.svg';
import PlusIcon from '../../../src/assets/images/plusIcons.svg';
import useSearch from '../../hooks/useSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Search = () => {

  const { showSearch, query, searchHandler, handleSearch, handleSubmit } = useSearch()

  return (
    <div className="flex w-full">
      {!showSearch && (
        <div className="flex justify-end w-full lg:hidden gap-5 md:relative md:right-[80px] ">
          <button
            onClick={searchHandler}
            className={`${colors.bgMovieColor} w-[39px] h-[37px] rounded-full flex items-center justify-center mt-2`}
          >
            <img src={SearchIcon} alt="Search" width={20} height={20} />
          </button>
          <button>
            <img src={PlusIcon} alt="Add" />
          </button>
        </div>
      )}
      {showSearch && (
        <div className="flex justify-center w-full lg:hidden mt-[120px] mb-[-50px]">
          <form onSubmit={handleSubmit} className="relative">
            <span className="absolute left-4 top-4">
              <FontAwesomeIcon icon={faMagnifyingGlass} className={`${colors.textGray} text-[20px]`} />
            </span>
            <input
              type="text"
              placeholder=" Search a movie or a series"
              value={query}
              onChange={handleSearch}
              className={`${colors.bgMovieColor} md:rounded-[30px]  ${colors.placeholderColor} lg:w-[630px] lg:h-[57px] md:w-[410px] md:h-[54px] w-[333px] h-[52.6px] rounded-[20px] font-roboto md:text-[20px] text-[16px] font-normal md:leading-[23.44px] leading-[21.09px] text-center focus:outline-none pr-14`}
            />
            <button
              type="submit"
              className={`absolute top-3 right-4 ${colors.bgBtnColor}  ${colors.textColor} font-normal py-1 px-3 rounded-[30px]`}
            >
              Search
            </button>
          </form>
        </div>
      )}
      <div className="hidden lg:flex justify-center w-full margin-input:ml-[90px] ">
        <form onSubmit={handleSubmit} className="relative">
          <span className="absolute left-4">
            <span className="absolute left-4 top-5">
              <FontAwesomeIcon icon={faMagnifyingGlass} className={`${colors.textGray} text-[20px]`} />
            </span>
          </span>
          <input
            type="text"
            placeholder=" Search a movie or a series"
            value={query}
            onChange={handleSearch}
            className={`${colors.bgMovieColor} md:rounded-[30px] ${colors.placeholderColor} lg:w-[630px] lg:h-[57px] md:w-[380px] md:h-[54px] w-[333px] h-[52.6px] rounded-[20px] font-roboto md:text-[20px] text-[18px] font-normal md:leading-[23.44px] leading-[21.09px] text-center focus:outline-none pr-14`}
          />
          <button
            type="submit"
            className={`absolute top-2 right-6 ${colors.bgBtnColor}  ${colors.textColor} font-bold py-2 px-4 rounded-[30px]`}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
