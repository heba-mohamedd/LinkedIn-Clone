import React, { useEffect, useState } from "react";
import { Home } from "../Pages";
import TopBar from "../components/ui/TopBar";
import { getCurrentUser } from "../api";

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Home currentUser={currentUser} />
    </div>
  );
}
