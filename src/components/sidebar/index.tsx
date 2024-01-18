import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import logo from "../../assets/logo (2).jpg";
import { useState } from "react";
import { TbMoodKid } from "react-icons/tb";
import { CiCalendarDate, CiSettings } from "react-icons/ci";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { GiPlayerBase } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";

const Sidebar = () => {
  const [expandend, setExpandend] = useState(true);
  return (
    <aside className="h-screen">
      <nav className="w-full h-full flex flex-col bg-white border-r shadow-lg">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Link to="/dashboard">
            <img
              src={logo}
              alt=""
              className={`overflow-hidden transition-all ${
                expandend ? "w-32" : "w-0"
              }`}
            />
          </Link>
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-200 "
            onClick={() => {
              setExpandend(!expandend);
            }}
          >
            {expandend ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <ul className={`flex-1 px-3 mt-5 `}>
          <h2
            className={`text-center text-xl mb-8 text-green-600  overflow-hidden transition-all ${
              expandend ? "w-32" : "w-0"
            }`}
          >
            Parents
          </h2>
          <Link to="/mykids">
            <li
              className={`relative flex items-center py-2 px-3  rounded-md cursor-pointer  my-1 font-medium transition-colors hover:bg-green-500 hover:text-white`}
            >
              <TbMoodKid size={25} />
              <span
                className={`overflow-hidden transition-all ml-3 ${
                  expandend ? "w-32" : "w-0"
                }`}
              >
                My Kids
              </span>
            </li>
          </Link>
          <Link to="/calendar">
            <li
              className={`relative flex items-center py-2 px-3 my-1  rounded-md cursor-pointer  font-medium transition-colors  hover:bg-green-500  hover:text-white`}
            >
              <CiCalendarDate size={25} />
              <span
                className={`overflow-hidden transition-all ml-3 ${
                  expandend ? "w-32" : "w-0"
                }`}
              >
                Calendar
              </span>
            </li>
          </Link>

          <li
            className={`relative flex items-center rounded-md cursor-pointer py-2 px-3 my-1 font-medium transition-colors  hover:bg-green-500  hover:text-white`}
          >
            <CiSettings size={25} />
            <span
              className={`overflow-hidden transition-all ml-3 ${
                expandend ? "w-32" : "w-0"
              }`}
            >
              Settings
            </span>
          </li>
          <h2
            className={`text-center text-xl mb-8 mt-8 text-green-600  overflow-hidden transition-all ${
              expandend ? "w-32" : "w-0"
            }`}
          >
            kindgarden
          </h2>
          <Link to="/kindergarten">
            <li
              className={`relative flex items-center rounded-md cursor-pointer py-2 px-3 my-1 font-medium transition-colors  hover:bg-green-500  hover:text-white`}
            >
              <GiPlayerBase size={25} />
              <span
                className={`overflow-hidden transition-all ml-3 ${
                  expandend ? "w-32" : "w-0"
                }`}
              >
                My Kindergarten
              </span>
            </li>
          </Link>
          <Link to="/calendar">
            <li
              className={`relative flex items-center rounded-md cursor-pointer py-2 px-3 my-1 font-medium transition-colors  hover:bg-green-500  hover:text-white`}
            >
              <CiCalendarDate size={25} />
              <span
                className={`overflow-hidden transition-all ml-3 ${
                  expandend ? "w-32" : "w-0"
                }`}
              >
                Calendar
              </span>
            </li>
          </Link>
          <Link to="/dailyPhoto">
            <li
              className={`relative flex items-center rounded-md cursor-pointer py-2 px-3 my-1 font-medium transition-colors  hover:bg-green-500  hover:text-white`}
            >
              <MdOutlinePhotoSizeSelectActual size={25} />
              <span
                className={`overflow-hidden transition-all ml-3 ${
                  expandend ? "w-32" : "w-0"
                }`}
              >
                Daily Photos
              </span>
            </li>
          </Link>
          <Link to="/menu">
            <li
              className={`relative flex items-center rounded-md cursor-pointer py-2 px-3 my-1 font-medium transition-colors  hover:bg-green-500  hover:text-white`}
            >
              <IoFastFoodOutline size={25} />
              <span
                className={`overflow-hidden transition-all ml-3 ${
                  expandend ? "w-32" : "w-0"
                }`}
              >
                Menu
              </span>
            </li>
          </Link>
          <li
            className={`relative flex items-center rounded-md cursor-pointer py-2 px-3 my-1 font-medium transition-colors  hover:bg-green-500  hover:text-white`}
          >
            <CiSettings size={25} />
            <span
              className={`overflow-hidden transition-all ml-3 ${
                expandend ? "w-32" : "w-0"
              }`}
            >
              Settings
            </span>
          </li>
        </ul>
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            className="w-10 h-10 rounded-md"
            alt=""
          />
          <div
            className={`flex justify-between items-center  overflow-hidden transition-all ${
              expandend ? "w-32 ml-3" : "w-0"
            } `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">User</h4>
              <span className="text-xs text-gray-600">user@gmail.com</span>
            </div>
            <MoreVertical size={20} className="cursor-pointer" />
          </div>
        </div>
        <button className=" bg-green-500 text-white h-8">Logout</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
