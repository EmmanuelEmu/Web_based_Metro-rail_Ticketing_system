import React, { useEffect, useState } from "react";
import control from "../../images/assets/control.png";
import metro_logo from "../../images/assets/metro_logo.png"
import logo from "../../images/assets/logo.png";
import Chart_fill from "../../images/assets/Chart_fill.png";
import Chat from "../../images/assets/Chat.png";
import User from "../../images/assets/User.png";
import Calendar from "../../images/assets/Calendar.png";
import Search from "../../images/assets/Search.png";
import Chart from "../../images/assets/Chart.png";
import Folder from "../../images/assets/Folder.png";
import Settings from "../../images/assets/Setting.png";
import Account from "../Account/account";
import Login from "../Login/login";

const HomePage = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Settings },
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
                  Menu.gap ? "mt-9" : "mt-2"
                } ${index === 0 && "bg-light-white"}`}
                onClick={(e) => {
                  handleOnclick(e);
                }}
              >
                <img src={Menu.src} />
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
          {menuItem === "Accounts" && <Account/>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
