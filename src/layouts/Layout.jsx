import React, { useEffect, useState } from "react";
import TopBar from "../components/ui/TopBar";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Layout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user && <TopBar />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
