import React from "react";
import { Button } from "./ui";
import { onLogout } from "../api";

export function HomeComponent() {
  return (
    <div>
      <Button onClick={onLogout}>Log out</Button>
    </div>
  );
}
