import React, { useEffect } from "react";
import { HomeComponent } from "../components";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

import Loader from "./../components/ui/Loader";

export function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) navigate("/");
    });
  }, []);
  return (
    <div>
      <HomeComponent />
    </div>
  );
}
