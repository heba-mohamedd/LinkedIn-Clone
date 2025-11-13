import React, { useState } from "react";
import { GoogleSignInAPI, postUserData, RegisterAPI } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, LogoHeader } from "./ui";
import GoogleLogo from "../assets/google.png";
import { Divider } from "./LoginComponent";

export function RegisterComponent() {
  const [credentails, setCredentails] = useState({});
  const navigate = useNavigate();

  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);

      postUserData({ name: credentails.name, email: credentails.email });
      toast.success("Account Created!");
      console.log(res);
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <LogoHeader />
      <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] bg-white shadow-md p-8 rounded-2xl flex flex-col gap-4">
        <p className="text-3xl font-semibold text-center">Sign Up</p>
        <p className="text-gray-600 text-center">
          Stay updated on your professional world
        </p>{" "}
        <input
          type="text"
          placeholder="Your Name"
          onChange={(event) =>
            setCredentails({ ...credentails, name: event.target.value })
          }
          className="p-3  border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
        <input
          type="email"
          placeholder="Email or Phone"
          onChange={(event) =>
            setCredentails({ ...credentails, email: event.target.value })
          }
          className="p-3  border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3  border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
          onChange={(event) =>
            setCredentails({ ...credentails, password: event.target.value })
          }
        />
        <Button onClick={register} variant="solid">
          Agree & Join
        </Button>
        <Divider text="or" />
        <Button
          onClick={GoogleSignInAPI}
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
        <div className="text-[#0274b3]">
          <p>
            Already on LinkedIn?{" "}
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer font-semibold hover:underline"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
