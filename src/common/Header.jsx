import React, { useState } from 'react';
import { FaBars, FaTimes ,FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem';
import { nav } from '../data/Data';
import Icon from '../components/Icon';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={showMenu ? "" : "w-full bg-white sticky top-0 z-10 drop-shadow-md"}>
      <div className="flex justify-between items-center p-2 pl-5 pr-4 flex-wrap">
        <div className="sm:hidden">
          {showMenu ? "" : <FaBars className='text-2xl' onClick={handleToggleMenu} />}
        </div>
        <div>
          <Link to="/" className="font-bold text-3xl ">
            Web<span className="text-yellow-500">Store</span>
          </Link>
        </div>
        <div
          className={`${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } sm:flex bg-white fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto transition-transform ease-in-out duration-300`}
          style={{ zIndex: 111 }}
        >
          <FaTimes
            onClick={handleToggleMenu}
            className="absolute top-3 right-3"
          />

          <ul className="flex flex-col font-bold p-4 m-8">
            {nav.map((list, key) => (
              <div className="mb-3" key={key}>
                <NavItem to={list.path} label={list.text} />
              </div>
            ))}
          </ul>
        </div>

        <div className="hidden sm:flex">
          <ul className="flex uppercase font-semibold">
            {nav.map((list, key) => (
              <div key={key}>
                <NavItem to={list.path} label={list.text} />
              </div>
            ))}
          </ul>
        </div>
        <div className="w-[30%] flex  border-2 p-1 rounded-lg ">
          <input
            className="w-full pl-2 outline-none"
            type="text"
            placeholder="Search items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch  className='text-2xl'/>


        </div>

        <div className="top-icon">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default Header;
