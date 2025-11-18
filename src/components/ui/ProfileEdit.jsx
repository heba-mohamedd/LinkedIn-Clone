import { Button } from "antd";
import React, { useState } from "react";
import { editProfile } from "../../api";
import { IoReturnDownBackOutline } from "react-icons/io5";

export function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState({});
  // console.log(currentUser);

  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };
  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  return (
    <div className="mt-5 bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto border border-gray-100">
      <div className="flex  mb-4 mt-3">
        <Button onClick={onEdit}>
          <IoReturnDownBackOutline size={25} />
          Go Back
        </Button>
      </div>
      {/* Inputs Grid */}
      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Name"
          className="h-[45px] w-full px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          onChange={getInput}
          name="name"
        />

        <input
          type="text"
          placeholder="Headline"
          className="h-[45px] w-full px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          onChange={getInput}
          name="headline"
        />

        <input
          type="text"
          placeholder="Location"
          className="h-[45px] w-full px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          onChange={getInput}
          name="location"
        />

        <input
          type="text"
          placeholder="Company"
          className="h-[45px] w-full px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          onChange={getInput}
          name="company"
        />

        <input
          type="text"
          placeholder="College"
          className="h-[45px] w-full px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          onChange={getInput}
          name="college"
        />
      </div>
      {/* Save Button */}
      <div className="flex justify-center mb-4 mt-3  font-semibold">
        <Button onClick={updateProfileData} type="primary" className="w-[50%]">
          Save
        </Button>
      </div>
    </div>
  );
}
