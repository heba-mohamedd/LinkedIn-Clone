import React, { useState } from "react";
import { RegisterAPI } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, LogoHeader } from "./ui";

export function RegisterComponent() {
  const [credentails, setCredentails] = useState({});
  const navigate = useNavigate();

  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created!");
      console.log(res);
      // localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  return (
    <div>
      {" "}
      <>
        <LogoHeader />
        <div className="border shadow-lg shadow-cyan-800 flex flex-col gap-7 w-1/3 m-auto p-6 rounded-xl">
          <p className="text-3xl font-semibold">Sign Up</p>
          <p className="text-gray-600">
            Stay updated on your professional world
          </p>
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
      </>
    </div>
  );
}
