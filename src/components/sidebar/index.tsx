import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import logo from "../../assets/logo (2).jpg";
import { useState } from "react";

const Sidebar = () => {
  const [expandend, setExpandend] = useState(true);
  return (
    <aside className="h-screen ">
      <nav className="w-full h-full flex flex-col bg-white border-r shadow-lg">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            alt=""
            className={`overflow-hidden transition-all ${
              expandend ? "w-32" : "w-0"
            }`}
          />
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-200 "
            onClick={() => {
              setExpandend(!expandend);
            }}
          >
            {expandend ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <ul className={`flex-1 px-3 `}>
          <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium transition-colors`}
          >
            icon
            <span
              className={`overflow-hidden transition-all ${
                expandend ? "w-52" : "w-0"
              }`}
            >
              Text
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
              expandend ? "w-52 ml-3" : "w-0"
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
