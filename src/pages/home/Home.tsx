import React from 'react';
import PopularMovie from '../../component/popularMovie/PopularMovie';
import Trending from '../../component/trending/Trending';
import PopularReleases from '../../component/popularRelease/PopularReleases';
import HashLoader from 'react-spinners/HashLoader';
import { colors, override } from '../../constant/colors';
import useLoading from '../../hooks/useLoader';

const Home: React.FC = () => {
  const loading = useLoading(2000);

  if (loading) {
    return (
      <div className={`fixed inset-0 flex items-center justify-center ${colors.bgColor} bg-opacity-80 z-50`}>
        <HashLoader cssOverride={override} size={150} color={'#000'} loading={loading} />
      </div>
    );
  }

  return (
    <div className="container-xl">
      <div className="md:mx-[80px] mx-5 md:mb-[85px] mb-[49px] md:mt-[69px] mt-[71px] ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[70px] md:gap-[35px] ">
          <div className="md:col-span-1 lg:col-span-1 ml-0 row-start-1">
            <PopularMovie />
          </div>
          <div className="md:col-span-2 md:ml-[60px] md:mt-0 mt-[48px] lg:mr-[-80px] mini-xl:mr-0 xl:mr-auto row-start-3 md:row-start-1">
            <Trending />
          </div>
          <div className="md:col-span-3 md:mt-0 mt-[48px] row-start-2 mx-auto custom-screen:mx-0 md:row-start-3 lg:row-start-2">
            <PopularReleases />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
