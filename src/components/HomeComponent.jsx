import React from "react";
import { PostUpdata } from "./ui";

export function HomeComponent({ currentUser }) {
  return (
    <div className="flex  justify-center items-center flex-col">
      <PostUpdata currentUser={currentUser} />
    </div>
  );
}
