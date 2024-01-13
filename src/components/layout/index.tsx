import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const DefaultLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
