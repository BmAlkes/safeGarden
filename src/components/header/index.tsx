import { useState } from "react";
import logo from "../../assets/logo (2).jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex w-full items-center p-2">
      <div className="container">
        <div className="relative mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 ">
            <Link to="/">
              <a href="/#" className="block w-full py-5">
                <img src={logo} alt="logo" />
              </a>
            </Link>
          </div>
          <div className="flex w-full items-center justify-end px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute border-2 border-slate-200 right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700 "></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-600"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700 "></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white p-2 py-5  lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent sm:border-slate-300  ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex ">
                  <Link to="/register">
                    <a
                      href="/#"
                      className="rounded-md bg-[#69c898] text-white px-7 mr-2 py-3 text-base font-medium text-dark hover:bg-[#259c60]"
                    >
                      Sign Up
                    </a>
                  </Link>
                  <Link to="/login">
                    <a
                      href="/#"
                      className="px-7 py-3 text-base  rounded-md bg-[#69c898] text-white font-medium text-dark hover:bg-[#259c60]"
                    >
                      Sign in
                    </a>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
