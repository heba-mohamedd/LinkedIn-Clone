import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { ModalComponent } from "./Modal";

export function PostUpdata() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const sendStatus = () => {
    console.log(status);
    setModalOpen(false);
    setStatus("");
  };

  return (
    <div className=" flex justify-center items-center flex-col relative">
      <div className=" bg-gray-100 w-[80vw] h-[120px]  mt-[30px] border-[#b7b7b7] border-1 flex justify-around items-center">
        <Avatar className="w-[50px] h-[50px]" />
        <button
          className="w-[80%] h-[50px] text-left text-[rgba(84,84,84,0.89)] 
  bg-[whitesmoke] outline-none border border-[#b7b7b7] 
  rounded-[30px] -ml-[30px] cursor-pointer 
  p-[15px] font-semibold text-[14px] font-sans"
          onClick={() => setModalOpen(true)}
        >
          Start a Post
        </button>
      </div>
      <ModalComponent
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setStatus={setStatus}
        status={status}
        sendStatus={sendStatus}
      />
    </div>
  );
}
