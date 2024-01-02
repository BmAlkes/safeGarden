import React, { useState } from "react";
import logo from "../../assets/logo (2).jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex w-full items-center p-2">
      <div className="container">
        <div className="relative mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link to="/">
              <a href="/#" className="block w-full py-5">
                <img src={logo} alt="logo" />
              </a>
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
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
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">Payment</ListItem>
                  <ListItem NavLink="/#">About</ListItem>
                  <ListItem NavLink="/#">Blog</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const ListItem = ({
  children,
  NavLink,
}: {
  children: React.ReactNode;
  NavLink: string;
}) => {
  return (
    <>
      <li className="w-full">
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-[#69c898] hover:text-[#259c60] lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
