import React from "react";
import { PostUpdata } from "./ui";

export function HomeComponent({ currentUser }) {
  return (
    <div className="">
      <PostUpdata currentUser={currentUser} />
    </div>
  );
}
