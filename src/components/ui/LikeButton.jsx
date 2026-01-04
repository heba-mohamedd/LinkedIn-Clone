import React, { useEffect, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { Button } from "antd";
import { getLikesByUser, likePost } from "../../api";

export default function LikeButton({ postId, userId }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  const handleLike = async () => {
    setLiked((prev) => !prev);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
    await likePost(postId, userId, liked);
  };

  const toggleCommentBox = () => {
    setShowCommentBox((prev) => !prev);
  };

  const handleSubmitComment = () => {
    if (!comment.trim()) return;
    console.log("Comment:", comment);
    setComment("");
  };

  useEffect(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
  }, [userId, postId]);

  return (
    <div className="mt-3">
      {/* Actions */}
      <div className="flex items-center justify-between border-y border-gray-200 py-2">
        {/* Like */}
        <div
          onClick={handleLike}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md cursor-pointer transition-all duration-200
          ${
            liked
              ? "text-blue-600 bg-blue-50 scale-105"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {liked ? <BiSolidLike size={20} /> : <BiLike size={20} />}

          <span className="text-sm font-medium">
            {liked ? "Liked" : "Like"}
          </span>

          {likesCount > 0 && (
            <span className="text-xs font-semibold text-gray-500">
              {likesCount}
            </span>
          )}
        </div>

        {/* Comment */}
        <div
          onClick={toggleCommentBox}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md cursor-pointer transition
         
               "text-gray-600 hover:bg-gray-100"
          `}
        >
          <FaRegCommentDots size={18} />
          <span className="text-sm font-medium">Comment</span>
        </div>
      </div>

      {/* Comment Input */}
      {showCommentBox && (
        <div className="flex items-center gap-2 mt-3 animate-fadeIn">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 px-4 py-2 text-sm bg-gray-100 focus:bg-white 
           border border-transparent focus:border-blue-500 
           rounded-full outline-none transition"
          />
          {comment.trim() && (
            <Button
              type="primary"
              disabled={!comment.trim()}
              onClick={handleSubmitComment}
              className="rounded-full px-4 py-2 text-sm"
            >
              Comment
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
