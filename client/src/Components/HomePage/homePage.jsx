import React, { useEffect, useState } from "react";
import control from "../../images/assets/control.png";
import metro_logo from "../../images/assets/metro_logo.png";
import Account from "../Account/account";
import { FaWpforms } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { MdSchedule } from "react-icons/md";
import { RiInboxArchiveLine, RiAccountBoxLine } from "react-icons/ri";
import { IoSettingsOutline, IoSearch } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import Dashboard from "../Dashboard/dashboard";
import { useLocation } from "react-router-dom";

const HomePage = () => {

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const objString = params.get('param1');
  console.log(objString);


  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: <RxDashboard size={24} /> },
    { title: "Inbox", src: <RiInboxArchiveLine size={24} /> },
    { title: "Accounts", src: <RiAccountBoxLine size={24} />, gap: true },
    { title: "Schedule ", src: <MdSchedule size={24} /> },
    { title: "Search", src: <IoSearch size={24} /> },
    { title: "Apply", src: <FaWpforms size={24} /> },
    { title: "Setting", src: <IoSettingsOutline size={24} /> },
    { title: "Contact Us", src: <MdOutlineContactSupport size={24} />, gap: true},
  ];

  const [menuItem, setMenuItem] = useState("");

  const handleOnclick = (e) => {
    const targetCoomponent = e.target.outerText;
    setMenuItem(targetCoomponent);
  };

  console.log(menuItem);

  return (
    <div>
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-violet-950 h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src={control}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={metro_logo}
              className={`rounded-full w-20 cursor-pointer duration-500 ${
                open && "scale-110"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Designer
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-blue-500 bg-opacity-5 text-gray-300 text-sm items-center gap-x-4 ${
                  Menu.gap ? "mt-14" : "mt-2"
                }
                ${Menu.gap && Menu.title === "Contact Us" ? "mt-40": "mt-2"}
                ${index === 0 && "bg-light-white"}`}
                onClick={(e) => {
                  handleOnclick(e);
                }}
              >
                {Menu.src}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1 p-7">
          {menuItem === "Accounts" && <Account userData = {objString}/>}
          {menuItem ==="Dashboard" && <Dashboard/>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
