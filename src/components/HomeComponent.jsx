import React from "react";
import { Button, PostUpdata } from "./ui";
import TopBar from "./ui/TopBar";

export function HomeComponent() {
  return (
    <div className="flex  justify-center items-center flex-col">
      <PostUpdata />
    </div>
  );
}
