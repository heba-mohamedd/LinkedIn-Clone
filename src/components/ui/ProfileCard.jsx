import React from "react";

export function ProfileCard({ currentUser, onEdit }) {
  return (
    <div className="w-auto h-[50vh]  bg-white shadow-md rounded-2xl p-6 m-[50px] border border-gray-100 ">
      <div className="flex justify-between">
        <div className=" flex flex-col">
          {/* Header */}

          <h3 className="text-2xl font-semibold text-gray-800">
            {currentUser.name}
          </h3>

          {/* Email */}
          <p className="text-gray-500 mt-1">{currentUser.email}</p>
        </div>

        <button
          onClick={onEdit}
          className="px-4  rounded-lg border  text-gray-700 hover:bg-blue-100 transition font-medium"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
