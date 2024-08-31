import Card from '../card/Card';
import { colors } from '../../constant/colors';

function Trending() {
  return (
    <div className="flex flex-col">
      <div className='max-w-[140px] md:max-w-[211px]'>
        <h3 className={`font-roboto text-[20px] ${colors.textBlack} font-[500] leading-[23.44px] md:mb-[23px] mb-[11px]`}>
          Trending
        </h3>
      </div>
      <div className="flex overflow-x-scroll hide-scroll-bar ">
        <div className="flex flex-nowrap">
          <Card type="movie" showReview />
        </div>
      </div>
    </div>
  );
}

export default Trending;
