import React, { useState } from "react";
import { ProfileCard, ProfileEdit } from "./ui";

export function ProfileComponent({ currentUser }) {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return (
    <div>
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )}
    </div>
  );
}
