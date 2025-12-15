import { useEffect, useState } from "react";
import { LoginComponent } from "../components";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/Loader";

export function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) navigate("/home");
      else setLoading(false);
    });
  }, []);
  return loading ? (
    <Loader children="Loading..Plase Wait.." />
  ) : (
    <LoginComponent />
  );
}
