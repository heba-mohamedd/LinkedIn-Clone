import React, { lazy, Suspense, useEffect, useState } from "react";
import { ModalComponent } from "./Modal";
import { getStatus, postStatus } from "../../api";
// import { PostsCard } from "./PostsCard";
import moment from "moment/moment";
import { Avatar } from "antd";
import DefaultProfile from "../../assets/profile.webp";
import { getUniqueID } from "../../helpers/getUniqueID";
const PostsCard = lazy(() => import("./PostsCard")); // lazy load  // postsCard component should become >>export defult

export function PostUpdata({ currentUser }) {
  // let userEmail = localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatuses] = useState([]);

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: moment().format("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.name,
      userID: currentUser.id,
      postID: getUniqueID(),
    };

    await postStatus(object);
    setModalOpen(false);
    setStatus("");
  };

  // Correct hook
  useEffect(() => {
    getStatus(setAllStatuses);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="bg-gray-100 border w-full max-w-3xl h-[120px] mt-8 border-gray-300 flex items-center px-6 rounded-2xl">
        {/* Avatar */}
        <Avatar size={50} src={DefaultProfile} />

        {/* Start a Post Button */}
        <button
          className="flex-1 h-12 ml-4 text-left bg-white border border-gray-300 rounded-full px-4 py-2 text-gray-700 font-semibold hover:bg-gray-50 transition"
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

      <Suspense
        fallback={
          <div className="grid grid-cols-1 gap-6 w-[70vw] mt-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-md rounded-2xl p-4 border border-gray-200 animate-pulse"
              >
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>

                {/* Text placeholders */}
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        }
      >
        {allStatuses.map((status) => (
          <PostsCard post={status} key={status.postID} />
        ))}
      </Suspense>
    </div>
  );
}
