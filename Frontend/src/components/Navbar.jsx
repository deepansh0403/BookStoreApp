import React, { useState, useEffect } from "react";
import Login from "./Login";
const Navbar = () => {

  const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme") : "light");
  const element = document.documentElement;
  useEffect(()=>{
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");

    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  },[theme]);



  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 0) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    };
    window.addEventListener("scroll", handlescroll);

    return () => {
      window.addEventListener("scroll", handlescroll);
    };
  }, []);

  const navitems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2x1 mx-auto  px-4 md:px-20 fixed top-0 left-0 right-0 z-10 dark:bg-slate-900 dark:text-white ${
          sticky
            ? "sticky-navbar shadow-sm bg-base-200 duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navitems}
              </ul>
            </div>
            <a className="md:text-xl ">Book Store</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navitems}</ul>
            </div>
            <div className="hidden md:block">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={()=>setTheme(theme === "light" ? "dark" :"light")}

              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={()=>setTheme(theme === "dark" ? "light" :"dark")}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <div className="">
              <a className="btn btn-sm bg-green-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-slate-400"
               onClick={()=>{ document.getElementById("my_modal_3").showModal()}}>
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      <Login/>
    </>
  );
};

export default Navbar;
