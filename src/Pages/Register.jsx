import React, { useEffect } from "react";
import { RegisterComponent } from "../components";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) navigate("/home");
    });
  }, []);
  return (
    <div>
      <RegisterComponent />
    </div>
  );
}
