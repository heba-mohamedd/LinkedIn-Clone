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
import Profile from "../../assets/profile.webp";
import { useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";
import { onLogout } from "../../api";
export default function TopBar() {
  const navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
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
        <div className="flex justify-center items-center ml-[20px] mr-[40px]">
          {" "}
          <Avatar className=" mr-[30px]" />
          <IoIosLogOut size={25} onClick={onLogout} className="react-icon" />
        </div>
      </div>
    </div>
  );
}
