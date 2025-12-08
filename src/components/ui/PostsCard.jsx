import React from "react";
import { Avatar } from "antd";
import DefaultProfile from "../../assets/profile.webp";
import { TextExpander } from "./TextExpander";
import { useNavigate } from "react-router-dom";

function PostsCard({ post }) {
  let navigate = useNavigate();
  return (
    <div className="m-5 w-full max-w-3xl mx-auto bg-white shadow-sm rounded-2xl p-8 border border-gray-100 ">
      {/* post header */}
      <div className="flex items-center gap-3 mb-3">
        <Avatar size={40} src={DefaultProfile} />
        <div>
          <p
            className="font-semibold text-blue-500 underline cursor-pointer"
            onClick={() =>
              navigate("/profile", {
                state: { id: post?.userID, email: post.userEmail },
              })
            }
          >
            {post.userName}
          </p>
          <p className="text-sm text-gray-500">
            {post.timeStamp
              ? new Date(post.timeStamp).toLocaleString()
              : "Just now"}
          </p>
        </div>
      </div>

      {/* Post content */}
      <TextExpander
        buttonColor="#212121"
        collapsedNumWords={15}
        className="text-left font-inter text-lg font-normal text-gray-800 leading-relaxed ml-1"
      >
        {post.status}
      </TextExpander>
    </div>
  );
}

export default React.memo(PostsCard);
