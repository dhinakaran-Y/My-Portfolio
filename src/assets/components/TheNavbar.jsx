import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TheNavbar = () => {
    const pageLocation = useLocation().pathname;

    useEffect(() => {
            console.log(pageLocation);
    },[pageLocation ])
    
    return (
      <>
        <nav className="navbar h-1/12 fixed z-50 top-0 px-20 max-sm:px-7 border-b bg-black border-b-gray-600">
          <div className="navbar-start">
            <Link to={"#"} className="max-sm:text-xs 2xl:text-4xl font-bold text-custom-green">DHINAKARAN-Y</Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className={`menu flex space-x-8 lg:max-xl:space-x-5 px-1`}>
              <Link to={""} className={`nav-link ${pageLocation === "/" ? "border-b border-emerald-500" : null}`}>Home</Link>
              <Link to={"project"} className={`nav-link ${pageLocation === "/project" ? "border-b border-emerald-500" : null}`}>Projects</Link>
              <Link to={"about"} className={`nav-link ${pageLocation === "/about" ? "border-b border-emerald-500" : null}`}>About</Link>
              <Link to={"skill"} className={`nav-link ${pageLocation === "/skill" ? "border-b border-emerald-500" : null}`}>Skills</Link>
              <Link to={"academics"} className={`nav-link ${pageLocation === "/academics" ? "border-b border-emerald-500" : null}`}>Academics</Link>
              <Link to={"contact"} className={`nav-link ${pageLocation === "/contact" ? "border-b border-emerald-500" : null}`}>Lets Talk</Link>
            </ul>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end ml-auto">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-lg dropdown-content bg-black rounded-box z-1 mt-1 space-y-1.5 w-52 p-2 shadow"
            >
              <li><Link to={""} className={`nav-link ${pageLocation === "" | "/" ? "border-b border-emerald-500" : null}`}>Home</Link></li>
              <li><Link to={"project"} className={`nav-link ${pageLocation === "/project" ? "border-b border-emerald-500" : null}`}>Projects</Link></li>
              <li><Link to={"about"} className={`nav-link ${pageLocation === "/about" ? "border-b border-emerald-500" : null}`}>About</Link></li>
              <li><Link to={"skill"} className={`nav-link ${pageLocation === "/skill" ? "border-b border-emerald-500" : null}`}>Skills</Link></li>
              <li><Link to={"academics"} className={`nav-link ${pageLocation === "/academics" ? "border-b border-emerald-500" : null}`}>Academics</Link></li>
              <li><Link to={"contact"} className={`nav-link ${pageLocation === "/contact" ? "border-b border-emerald-500" : null}`}>Lets Talk</Link></li>
            </ul>
          </div>
        </nav>
        <div className="h-[9vh] w-full" id="top-none-div"></div>
      </>
    );
}

export default TheNavbar