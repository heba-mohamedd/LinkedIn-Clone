import React from "react";

export function ProfileEdit({ onEdit }) {
  return (
    <div>
      <button onClick={onEdit}>Save</button>
    </div>
  );
}
