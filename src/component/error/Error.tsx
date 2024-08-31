import { Link } from "react-router-dom";


export default function Error (){
    return (
        <div
          className={`flex flex-col h-screen justify-center items-center `}
        >
          <div className="flex flex-col items-center font-roboto px-4">
            <p
              className={`text-lg sm:text-xl md:text-2xl font-medium   mb-6 text-center`}
            >
              No Page Found
            </p>
            <Link
              to={"/"}
              className={`px-4 py-2 font-medium  rounded-lg  transition-all duration-200 ease-in-out`}
            >
              Go Back To Home
            </Link>
          </div>
        </div>
      );
    }

  
