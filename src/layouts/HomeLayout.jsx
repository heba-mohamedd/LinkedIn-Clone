import React from "react";
import { Home } from "../Pages";
import TopBar from "../components/ui/TopBar";

export default function HomeLayout() {
  return (
    <div>
      <TopBar />
      <Home />
    </div>
  );
}
