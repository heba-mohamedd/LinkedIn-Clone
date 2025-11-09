import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";

import LinkedinLogo from "../../assets/LinkedinLogo.png";
import Profile from "../../assets/profile.webp";
export default function TopBar() {
  return (
    <div
      className="w-full h-[60px] bg-[rgba(255,255,255,0.87)] flex items-center
"
    >
      <img
        src={LinkedinLogo}
        alt=" logo"
        className="w-[50px] ml-[20px]  rounded-full"
      />
      <div className="flex items-center justify-between w-full ml-[40px] ">
        <div className="flex items-center justify-between w-[45%]  ">
          <IoIosSearch size={30} className="react-icon" />
          <IoHomeOutline size={30} className="react-icon" />
          <GoPeople size={30} className="react-icon" />
          <IoBagHandleOutline size={30} className="react-icon" />
          <LuMessageCircleMore size={30} className="react-icon" />
          <IoIosNotificationsOutline size={30} className="react-icon" />
        </div>
        <img
          src={Profile}
          alt="profile"
          className="w-[40px] ml-[20px]  rounded-full  mr-[40px]"
        />
      </div>
    </div>
  );
}
