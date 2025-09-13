import React, { useRef } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

function Navbar() {
  const themeRef = useRef(localStorage.getItem("theme") || "light");
  document.documentElement.setAttribute("data-theme", themeRef.current);

  const handleChange = () => {
    themeRef.current = themeRef.current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", themeRef.current);
    localStorage.setItem("theme", themeRef.current);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TODO</a>
        </div>
        <label className="flex text-2xl items-center cursor-pointer gap-2">
          <MdSunny />
          <input
            onChange={handleChange}
            defaultChecked={themeRef.current == "light" ? false : true}
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
          />
          <IoMoon />
        </label>
      </div>
    </div>
  );
}

export default Navbar;
