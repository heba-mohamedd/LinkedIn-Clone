import React, { useMemo, useState } from "react";
import { Home } from "../Pages";
import TopBar from "../components/ui/TopBar";
import { getCurrentUser } from "../api";

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Home currentUser={currentUser} />
    </div>
  );
}
