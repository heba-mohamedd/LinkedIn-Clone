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
      // localStorage.setItem("userEmail", res.user.email);
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
    <div>
      {" "}
      <>
        <LogoHeader />
        <div className=" gap-3 flex flex-col w-[40%] m-auto p-6 rounded-xl">
          <p className="text-3xl font-semibold">Sign In</p>
          <p className="text-gray-600">
            Stay updated on your professional world
          </p>

          <input
            type="email"
            placeholder="Email or Phone"
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            className="p-3  border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3  border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
          />

          <p className="text-[#0274b3] font-semibold cursor-pointer hover:underline">
            Forget Password
          </p>
          <Button onClick={login} variant="solid">
            Sign In
          </Button>
          <Divider text="or" />
          {/* <GoogleButton onClick={googleSignIn} /> */}

          <Button onClick={googleSignIn} className="bg-white" variant="outline">
            <div className="flex justify-center items-center j">
              {" "}
              <img
                src={GoogleLogo}
                className="w-[30px] h-[30px] mr-3"
                alt="google"
              />
              <span>Sign in with google</span>
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

          <div className="text-[#0274b3]">
            <p className=" text-center">
              New to LinkedIn?{" "}
              <span
                onClick={() => navigate("/register")}
                className="cursor-pointer font-semibold hover:underline"
              >
                Join now
              </span>
            </p>
          </div>
        </div>
      </>
    </div>
  );
}

function Divider({ text = "" }) {
  return (
    <div className="flex items-center text-gray-500 font-medium">
      <div className="flex-grow border-t border-gray-300"></div>
      {text && <span className="px-3">{text}</span>}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}
