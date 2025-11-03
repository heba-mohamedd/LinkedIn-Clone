import React from "react";
import LinkedinLogo from "../../assets/LinkedinLogo.png";

export function LogoHeader() {
  return (
    <div className="flex items-center  p-2 rounded-lg gap-2 text-4xl px-[30px]">
      <span className="font-bold text-[#0274B3]">Linked</span>
      <img src={LinkedinLogo} alt="LinkedIn" className="w-12 h-12" />
    </div>
  );
}
