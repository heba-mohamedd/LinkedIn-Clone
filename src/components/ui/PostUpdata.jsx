import React, { useMemo, useState } from "react";
import { ModalComponent } from "./Modal";
import { getStatus, postStatus } from "../../api";
import { PostsCard } from "./PostsCard";
import moment from "moment/moment";
import { Avatar } from "antd";
import DefaultProfile from "../../assets/profile.webp";
import { getUniqueID } from "../../helpers/getUniqueID";

export function PostUpdata({ currentUser }) {
  let userEmail = localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatuses] = useState([]);

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: moment().format("LLL"),
      userEmail: userEmail,
      userName: currentUser.name,
      postID: getUniqueID(),
    };
    console.log(object);
    await postStatus(object);
    setModalOpen(false);
    setStatus("");
  };
  useMemo(() => {
    getStatus(setAllStatuses);
  }, []);

  return (
    <div className=" flex justify-center items-center flex-col relative">
      <div className=" bg-gray-100 w-[70vw] h-[120px]  mt-[30px] border-[#b7b7b7] border-1 flex justify-around items-center">
        <Avatar size={50} src={DefaultProfile} />
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

      <div>
        {allStatuses.map((status) => {
          return <PostsCard post={status} key={status.id} />;
        })}
      </div>
    </div>
  );
}
