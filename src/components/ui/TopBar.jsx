import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUserCheck } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import LinkedinLogo from "../../assets/LinkedinLogo.png";
import DefaultProfile from "../../assets/profile.webp";
import { useNavigate } from "react-router-dom";

import { onLogout } from "../../api";
import { Avatar, Dropdown, Menu } from "antd";

export default function TopBar() {
  const navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };

  const handleLogOut = () => {
    onLogout();
    localStorage.removeItem("userEmail");
  };

  const items = [
    {
      key: "logout",
      label: (
        <div
          onClick={handleLogOut}
          className="flex items-center gap-3 text-gray-700 hover:text-red-500 mx-[15px]"
        >
          <IoIosLogOut size={20} />
          <span>Logout</span>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full h-[60px] bg-[rgba(255,255,255,0.87)] flex items-center justify-between px-4 sm:px-8 shadow-sm sticky top-0 z-50 backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={LinkedinLogo}
          alt="logo"
          className="w-[45px] sm:w-[50px] rounded-full cursor-pointer"
          onClick={() => goToRoute("/home")}
        />
      </div>

      {/* Icons (Middle Section) */}
      <div className="hidden sm:flex items-center justify-between gap-6 text-gray-700">
        <IoIosSearch size={25} className="react-icon" />
        <IoHomeOutline
          size={25}
          className="react-icon"
          onClick={() => goToRoute("/home")}
        />
        <FiUserCheck
          size={25}
          className="react-icon"
          onClick={() => goToRoute("/profile")}
        />
        <IoBagHandleOutline size={25} className="react-icon" />
        <LuMessageCircleMore size={25} className="react-icon" />
        <IoIosNotificationsOutline size={25} className="react-icon" />
      </div>

      {/* Right Section (Avatar + Logout) */}
      <div className="flex items-center gap-4 sm:gap-6">
        <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
          <Avatar
            size={40}
            src={DefaultProfile}
            className="cursor-pointer hover:opacity-80 transition"
          />
        </Dropdown>
      </div>

      {/* Mobile Icons (visible only on small screens) */}
      <div className="flex sm:hidden items-center gap-5 text-gray-700">
        <IoHomeOutline
          size={25}
          className="react-icon"
          onClick={() => goToRoute("/home")}
        />
        <LuMessageCircleMore size={25} className="react-icon" />
        <IoIosNotificationsOutline size={25} className="react-icon" />
      </div>
    </div>
  );
}
