import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./Toggle";

export function Navbar() {
  const [dark , setDark] = useState(false);
  function handleDark(){
    setDark(!dark);
  }
  return (
    <div className="p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <Link to="/" className="font-bold text-3xl text-indigo-400 mr-2 mb-2 md:mb-0 md:text-5xl">TextEdit</Link>
        <div className="flex flex-col md:flex-row">
          <Link to="/" className="font-bold text-lg mx-2">Home</Link>
          <Link to="/about" className="font-bold text-lg mx-2">About</Link>
        </div>
      </div>
      {/* <div className="flex items-center bg-indigo-300 p-2 rounded-md">
        <ToggleButton />
        <span onClick={handleDark} className="ml-2">Dark mode: {dark ? "On" : "Off"}</span>
      </div> */}
    </div>
  );
}
