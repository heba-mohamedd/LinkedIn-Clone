import React, { useEffect, useState } from "react";
import { HomeComponent } from "../components";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

import Loader from "./../components/ui/Loader";

export function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) navigate("/");
      else setLoading(false);
    });
  }, []);
  return loading ? <Loader /> : <HomeComponent />;
}
