import React, { useEffect, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { Button } from "antd";
import {
  getCommentsByPost,
  getLikesByUser,
  likePost,
  postComment,
} from "../../api";
import { getCurrentTimeStamp } from "../../helpers/useMoment";
import { Avatar } from "antd";
import DefaultProfile from "../../assets/profile.webp";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";

export default function LikeButton({ postId, userId, currentUser }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = async () => {
    likePost(postId, userId, liked);
    // setLiked((prev) => {
    //   const newLiked = !prev;
    //   setLikesCount((count) => (newLiked ? count + 1 : count - 1));
    //   likePost(postId, userId, newLiked);
    //   return newLiked;
    // });
  };

  const handleSubmitComment = () => {
    if (!comment.trim()) return;

    postComment(
      postId,
      comment,
      getCurrentTimeStamp("YYYY-MM-DD HH:mm:ss"),
      currentUser?.name
    );

    setComment("");
    setShowEmojiPicker(false);
  };

  useEffect(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
    getCommentsByPost(postId, setComments);
  }, [userId, postId]);

  return (
    <div className="mt-3">
      {/* Actions */}
      {likesCount > 0 && <p>{likesCount} People Like this Post</p>}
      <div className="flex items-center justify-between border-y border-gray-200 py-2">
        <div
          onClick={handleLike}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md cursor-pointer transition
            ${
              liked
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          {liked ? <BiSolidLike size={20} /> : <BiLike size={20} />}
          <span className="text-sm font-medium">
            {liked ? "Liked" : "Like"}
          </span>
          {likesCount > 0 && (
            <span className="text-xs text-gray-500">{likesCount}</span>
          )}
        </div>

        <div
          onClick={() => setShowCommentBox((prev) => !prev)}
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md cursor-pointer transition text-gray-600 hover:bg-gray-100"
        >
          <FaRegCommentDots size={18} />
          <span className="text-sm font-medium">Comment</span>
        </div>
      </div>

      {/* Comment Input */}
      {showCommentBox && (
        <div className="relative mt-3">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full px-4 py-2 pr-10 text-sm bg-gray-100 focus:bg-white border border-gray-200 focus:border-blue-500 rounded-full outline-none"
              />

              <BsEmojiSmile
                onClick={() => setShowEmojiPicker((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 cursor-pointer"
                size={20}
              />
            </div>

            {comment.trim() && (
              <Button
                type="primary"
                onClick={handleSubmitComment}
                className="rounded-full px-4 py-2 text-sm"
              >
                Comment
              </Button>
            )}
          </div>

          {showEmojiPicker && (
            <div className="absolute right-0 mt-2 z-50">
              <EmojiPicker
                onEmojiClick={(e) => setComment((prev) => prev + e.emoji)}
              />
            </div>
          )}
        </div>
      )}

      {/* Comments */}
      <div className="mt-4 space-y-3">
        {comments.map((cmt, index) => (
          <div key={index} className="flex gap-2">
            <Avatar size={32} src={DefaultProfile} />
            <div className="bg-gray-100 rounded-xl px-3 py-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">{cmt.name}</span>
                <span className="text-xs text-gray-500">{cmt.timeStamp}</span>
              </div>
              <p className="text-sm text-gray-800 mt-1">{cmt.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
