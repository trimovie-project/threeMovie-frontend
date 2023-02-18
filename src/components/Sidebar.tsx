import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { IoDesktopOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { BsCalendarWeek } from "react-icons/bs";
import { RiHeart2Fill } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";
import { ImHome } from "react-icons/im";

import Logo from "../assets/Three-Movie.svg";
import Avatar from "../assets/react.svg";

import "../styles/main.css";

const Sidebar = () => {
  // const activeLink = `text-hover w-full bg-[rgba(61,210,204,0.4)] border-r-4 border-hover  drop-shadow-xl`;
  const activeLink = `textShadow flex gap-4 w-full pl-8 py-5 text-hover bg-[rgba(61,210,204,0.4)] border-r-4 border-hover drop-shadow-xl`;
  const normalLink = `w-full flex gap-4 pl-8 py-5`;

  return (
    <div className="h-screen w-[18vw] bg-component">
      <img
        className="w-40 pt-5 pl-5 pb-10"
        src={Logo}
        alt="logo-ThreeMovie.svg"
      />

      <ul className="text-text2 font-semibold text-[14px]">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <ImHome className="w-5 h-5" />
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/trending"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <AiFillFire className="w-6 h-6" />
            Trending
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <IoDesktopOutline className="w-5 h-5" />
            TV Series
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <BsCalendarWeek className="w-5 h-5" />
            Upcoming
          </NavLink>
        </li>
      </ul>

      <div className="ml-5 mr-12 border-t-2 border-text2 mt-10 mb-4"></div>

      <ul className="text-text2 font-semibold text-[14px]">
        <li className="">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <RiHeart2Fill className="w-5 h-5" />
            Favorite
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <IoLogOutOutline className="w-6 h-6" />
            Log Out
          </NavLink>
        </li>
      </ul>

      <div className="flex mt-7 p-5 gap-2 text-zinc-50">
        <img className="rounded-full w-10 h-10" src={Avatar} alt="avatar.svg" />
        <div>
          <p className="text-[14px] font-semibold">Alfin Fernanda</p>
          <p className="text-[12px]">alfinfernanda@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
