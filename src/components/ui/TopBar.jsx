import React, { useMemo, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import LinkedinLogo from "../../assets/LinkedinLogo.png";
import DefaultProfile from "../../assets/profile.webp";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import { getCurrentUser, onLogout } from "../../api";
import { Avatar, Dropdown } from "antd";

export default function TopBar() {
  const navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  const handleLogOut = () => {
    onLogout();
    localStorage.removeItem("userEmail");
  };
  console.log(currentUser);

  const items = [
    {
      key: "information",
      label: (
        <div className="flex gap-3 p-2 ">
          <Avatar size={45} src={DefaultProfile} />
          <div className="flex flex-col  w-[170px]">
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
          className="flex items-center justify-center gap-2 text-blue-500 p-0.25 border 
        border-blue-500 rounded-4xl font-medium hover:bg-blue-50 cursor-pointer"
        >
          <CgProfile size={20} />
          View Profile
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: (
        <div
          onClick={handleLogOut}
          className="flex items-center gap-2  text-gray-700 hover:text-red-500 cursor-pointer"
        >
          <IoIosLogOut size={20} />
          Logout
        </div>
      ),
    },
  ];

  return (
    <div
      className="w-full h-[60px] bg-white/90 flex items-center justify-between px-4 sm:px-8 
shadow-sm sticky top-0 z-50 backdrop-blur-md border-b border-gray-200"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={LinkedinLogo}
          alt="logo"
          className="w-[45px] sm:w-[48px] rounded-full cursor-pointer hover:opacity-80 transition"
          onClick={() => goToRoute("/home")}
        />
      </div>

      {/* Middle Icons */}
      <div className="hidden sm:flex items-center gap-8 text-gray-600">
        <IoIosSearch
          size={24}
          className="hover:text-black transition cursor-pointer"
        />
        <IoHomeOutline
          size={24}
          className="hover:text-black transition cursor-pointer"
          onClick={() => goToRoute("/home")}
        />
        <IoBagHandleOutline
          size={24}
          className="hover:text-black transition cursor-pointer"
        />
        <LuMessageCircleMore
          size={24}
          className="hover:text-black transition cursor-pointer"
        />
        <IoIosNotificationsOutline
          size={24}
          className="hover:text-black transition cursor-pointer"
        />
      </div>

      {/* User Menu */}
      <div className="flex items-center">
        <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
          <Avatar
            size={40}
            src={DefaultProfile}
            className="cursor-pointer hover:ring-2 hover:ring-blue-400 transition rounded-full"
          />
        </Dropdown>
      </div>

      {/* Mobile Icons */}
      <div className="flex sm:hidden items-center gap-4 text-gray-600">
        <IoHomeOutline
          size={24}
          className="hover:text-black transition cursor-pointer"
          onClick={() => goToRoute("/home")}
        />
        <LuMessageCircleMore
          size={24}
          className="hover:text-black transition cursor-pointer"
        />
        <IoIosNotificationsOutline
          size={24}
          className="hover:text-black transition cursor-pointer"
        />
      </div>
    </div>
  );
}
