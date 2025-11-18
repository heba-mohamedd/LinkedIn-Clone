import { Button } from "antd";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { LiaUserEditSolid } from "react-icons/lia";
import { getStatus } from "../../api";
// import PostsCard from "./PostsCard";
const PostsCard = lazy(() => import("./PostsCard")); // lazy load  // postsCard component should become >>export defult

export function ProfileCard({ currentUser, onEdit }) {
  const [allStatuses, setAllStatuses] = useState([]);

  // Correct hook
  useEffect(() => {
    getStatus(setAllStatuses);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      {" "}
      <div className="mt-12 w-full max-w-3xl mx-auto bg-white shadow-sm rounded-2xl p-8 border border-gray-100 ">
        {/* Edit Button */}
        <div className="flex justify-end ">
          <Button onClick={onEdit}>
            <LiaUserEditSolid size={22} />
            Edit
          </Button>
        </div>

        <div className="flex items-start justify-between ">
          {/* LEFT SIDE */}
          <div className="flex flex-col  w-full">
            <h4 className="text-3xl font-semibold text-gray-900 tracking-tight">
              {currentUser.name}
            </h4>

            <div className="flex justify-between font-sans ">
              <div>
                <p>{currentUser?.headline}</p>
                <p>{currentUser?.location}</p>
              </div>

              <div>
                <p>{currentUser?.company}</p>
                <p>{currentUser?.college}</p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Suspense
        fallback={
          <div className="grid grid-cols-1 gap-6 w-[70vw] mt-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className=" w-full max-w-4xl mx-auto bg-white shadow-sm rounded-2xl p-8 border border-gray-100"
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
        {allStatuses
          .filter(
            (item) => item.userEmail === localStorage.getItem("userEmail")
          )
          .map((status) => (
            <PostsCard post={status} key={status.postID} />
          ))}
      </Suspense>
    </div>
  );
}
