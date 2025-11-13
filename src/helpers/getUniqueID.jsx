import React from "react";
import { v4 as uuidv4 } from "uuid";
export function getUniqueID() {
  let id = uuidv4();

  return id;
}
