import React, { useEffect, useState } from "react";
import {
  IoIosSearch,
  IoIosNotificationsOutline,
  IoIosLogOut,
} from "react-icons/io";
import { IoHomeOutline, IoBagHandleOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { Avatar, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

import LinkedinLogo from "../../assets/LinkedinLogo.png";
import DefaultProfile from "../../assets/profile.webp";
import { getCurrentUser, onLogout } from "../../api";

export default function TopBar() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  const goToRoute = (route) => navigate(route);

  const handleLogOut = () => {
    onLogout();
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  const items = [
    {
      key: "info",
      label: (
        <div className="flex gap-3 p-2">
          <Avatar size={45} src={DefaultProfile} />
          <div className="flex flex-col w-[180px]">
            <span className="font-semibold text-base">{currentUser?.name}</span>
            <span className="text-gray-500 text-sm">
              {currentUser?.headline}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "profile",
      label: (
        <div
          onClick={() =>
            navigate("/profile", { state: { id: currentUser?.id } })
          }
          className="flex items-center justify-center gap-2 text-blue-600
          border border-blue-600 rounded-full py-1 hover:bg-blue-50 cursor-pointer"
        >
          <CgProfile size={18} />
          View Profile
        </div>
      ),
    },
    { type: "divider" },
    {
      key: "logout",
      label: (
        <div
          onClick={handleLogOut}
          className="flex items-center gap-2 text-gray-700 hover:text-red-500 cursor-pointer"
        >
          <IoIosLogOut size={20} />
          Logout
        </div>
      ),
    },
  ];

  return (
    <div
      className="w-full h-[60px] bg-white/90 backdrop-blur-md
      border-b border-gray-200 shadow-sm sticky top-0 z-50
      flex items-center justify-between px-4 sm:px-8"
    >
      {/* Logo */}
      <img
        src={LinkedinLogo}
        alt="logo"
        className="w-[45px] cursor-pointer hover:opacity-80 transition"
        onClick={() => goToRoute("/home")}
      />

      {/* Center Icons (Desktop) */}
      <div className="hidden sm:flex items-center gap-8 text-gray-600">
        <IoIosSearch size={24} className="cursor-pointer hover:text-black" />
        <IoHomeOutline
          size={24}
          className="cursor-pointer hover:text-black"
          onClick={() => goToRoute("/home")}
        />
        <IoBagHandleOutline
          size={24}
          className="cursor-pointer hover:text-black"
        />
        <LuMessageCircleMore
          size={24}
          className="cursor-pointer hover:text-black"
        />
        <IoIosNotificationsOutline
          size={24}
          className="cursor-pointer hover:text-black"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Icons */}
        <div className="flex sm:hidden items-center gap-4 text-gray-600">
          <IoHomeOutline
            size={24}
            className="cursor-pointer"
            onClick={() => goToRoute("/home")}
          />
          <LuMessageCircleMore size={24} className="cursor-pointer" />
          <IoIosNotificationsOutline size={24} className="cursor-pointer" />
        </div>

        {/* Profile Dropdown */}
        <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
          <Avatar
            size={40}
            src={DefaultProfile}
            className="cursor-pointer hover:ring-2 hover:ring-blue-400 transition"
          />
        </Dropdown>
      </div>
    </div>
  );
}
