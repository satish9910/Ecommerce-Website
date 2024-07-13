import { useState } from "react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


import { Link } from "react-router-dom";
import NavItem from "../components/NavItem";
import { nav } from "../data/Data";
import Icon from "../components/Icon";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
        <div className={showMenu ? "":"w-full bg-white sticky top-0 z-10 drop-shadow-md"}>
      <div className="flex justify-between items-center p-2 pl-5 pr-4 flex-wrap">
        <div className="sm:hidden">
        {showMenu ? "":  <FaBars onClick={handleToggleMenu} />}
        </div>
        <div>
          <Link to="/" className="font-bold text-3xl ">
            Tech <span className="text-yellow-500">Sol</span>
          </Link>
        </div>
        <div
          className={`${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } sm-flex bg-white fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto transition-transform ease-in-out duration-300`}
          style={{zIndex:111}}
        >
          <FaTimes
            onClick={handleToggleMenu}
            className="absolutes top-3 right-3"
          />
          
          <ul className="flex flex-col font-bold p-4 m-8">
          {
            nav.map((list,key) => (
                <div className="mb-3">
                <NavItem key={key} to={list.path} label={list.text} />
                </div>
             ))
          }
          </ul>
        </div>
        <div className="hidden sm:flex" >
        <ul className="flex uppercase font-semibold">
          {
            nav.map((list,key) => (
                <div className="mb-3">
                <NavItem key={key} to={list.Path} label={list.text} />
                </div>
             ))
          }
          </ul>
        </div>
        <div className="top-icon">
            <Icon/>
        </div>
      </div>
    </div>
  );
};

export default Header;
