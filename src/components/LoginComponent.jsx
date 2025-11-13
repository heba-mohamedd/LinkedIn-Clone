import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, LogoHeader } from "./ui";
import GoogleLogo from "../assets/google.png";
import GoogleButton from "react-google-button";
import { GoogleSignInAPI, LoginAPI } from "../api";

export function LoginComponent() {
  const navigate = useNavigate();
  const [credentails, setCredentials] = useState({
    email: "",
    password: "",
  });
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin!");
      console.log(res);
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };
  const googleSignIn = async () => {
    try {
      const res = await GoogleSignInAPI();
      toast.success("Signed In with Google!");
      console.log(res);
      // localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.error(err);
      toast.error("Google Sign-in Failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Header */}
      <LogoHeader />

      {/* Sign In Card */}
      <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] bg-white shadow-md p-8 rounded-2xl flex flex-col gap-4">
        <p className="text-3xl font-semibold text-center">Sign In</p>
        <p className="text-gray-600 text-center">
          Stay updated on your professional world
        </p>

        <input
          type="email"
          placeholder="Email or Phone"
          onChange={(event) =>
            setCredentials({ ...credentails, email: event.target.value })
          }
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) =>
            setCredentials({ ...credentails, password: event.target.value })
          }
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />

        <p className="text-[#0274b3] font-semibold cursor-pointer hover:underline text-right">
          Forget Password?
        </p>

        <Button onClick={login} variant="solid">
          Sign In
        </Button>

        <Divider text="or" />

        <Button
          onClick={googleSignIn}
          className="bg-white border hover:bg-gray-100 transition-all duration-200"
          variant="outline"
        >
          <div className="flex justify-center items-center">
            <img
              src={GoogleLogo}
              className="w-[25px] h-[25px] mr-3"
              alt="google"
            />
            <span className="text-gray-700 font-medium">
              Sign in with Google
            </span>
          </div>
        </Button>
        {/* <Button onClick={() => {}} className="bg-white" variant="outline">
              <div className="flex justify-center items-center j">
                {" "}
                <img
                  src="src\assets\R.png"
                  className="w-[50px] h-[30px] mr-3"
                  alt="google"
                />
                <span> Sign In with Apple</span>
              </div>
            </Button> */}

        <div className="text-center mt-2 text-gray-700">
          New to LinkedIn?{" "}
          <span
            onClick={() => navigate("/register")}
            className="cursor-pointer text-[#0274b3] font-semibold hover:underline"
          >
            Join now
          </span>
        </div>
      </div>
    </div>
  );
}

export function Divider({ text = "" }) {
  return (
    <div className="flex items-center text-gray-500 font-medium">
      <div className="flex-grow border-t border-gray-300"></div>
      {text && <span className="px-3">{text}</span>}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}
