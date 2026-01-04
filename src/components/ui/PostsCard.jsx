import React, { useEffect, useState } from "react";
import { Avatar, Card } from "antd";
import DefaultProfile from "../../assets/profile.webp";
import { TextExpander } from "./TextExpander";
import { useNavigate } from "react-router-dom";
import LikeButton from "./LikeButton";
import { getCurrentUser } from "../../api";

function PostsCard({ post }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div className="my-3 flex justify-center w-full max-w-3xl">
      <Card
        className="w-full max-w-3xl rounded-xl shadow-sm"
        styles={{ body: { padding: "16px" } }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <Avatar size={40} src={DefaultProfile} />

          <div>
            <p
              className="mb-1 font-semibold text-blue-600 underline cursor-pointer hover:text-blue-700"
              onClick={() =>
                navigate("/profile", {
                  state: { id: post?.userID, email: post.userEmail },
                })
              }
            >
              {post.userName}
            </p>

            <p className="text-xs text-gray-500">
              {post.timeStamp
                ? new Date(post.timeStamp).toLocaleString()
                : "Just now"}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-2 text-gray-800 leading-relaxed">
          <TextExpander
            buttonColor="#212121"
            collapsedNumWords={15}
            className="text-base"
          >
            {post.status}
          </TextExpander>
        </div>
        <div>
          <LikeButton postId={post?.id} userId={currentUser?.id} />
        </div>
      </Card>
    </div>
  );
}

export default React.memo(PostsCard);
