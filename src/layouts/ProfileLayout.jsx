import React, { useEffect, useState } from "react";
import { Profile } from "../Pages";
import { getCurrentUser } from "../api";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Profile currentUser={currentUser} />
    </div>
  );
}
