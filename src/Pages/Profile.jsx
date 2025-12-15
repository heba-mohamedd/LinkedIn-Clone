import React, { useEffect, useState } from "react";
import { ProfileComponent } from "../components";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Loader from "../components/ui/Loader";

export function Profile({ currentUser }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) navigate("/");
      else setLoading(false);
    });
  }, []);
  return loading ? (
    <Loader children="Loading..Plase Wait.." />
  ) : (
    <ProfileComponent currentUser={currentUser} />
  );
}
