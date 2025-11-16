import React, { useMemo, useState } from "react";
import { Profile } from "../Pages";
import { getCurrentUser } from "../api";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Profile currentUser={currentUser} />
    </div>
  );
}
