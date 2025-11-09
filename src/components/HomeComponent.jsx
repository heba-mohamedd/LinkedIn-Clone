import React from "react";
import { Button } from "./ui";
import { onLogout } from "../api";
import TopBar from "./ui/TopBar";

export function HomeComponent() {
  return (
    <div className="flex  justify-center items-center flex-col">
      <Button onClick={onLogout}>Log out</Button>
    </div>
  );
}
