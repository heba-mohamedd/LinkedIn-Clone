import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { toast } from "react-toastify";

const postsRef = collection(firestore, "posts");
const userRef = collection(firestore, "users");
// console.log(userRef);   //print data about collection
export const postStatus = async (object) => {
  await addDoc(postsRef, object)
    .then(() => {
      // console.log(res);
      toast.success("Document has been added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getStatus = (setAllStatuses) => {
  onSnapshot(postsRef, (response) => {
    const postsArray = response.docs.map((docs) => ({
      ...docs.data(),
      id: docs.id,
    }));

    setAllStatuses(postsArray);
  });
};

export const postUserData = async (onject) => {
  await addDoc(userRef, onject)
    .then(() => {})
    .catch((err) => console.log(err));
};

export const getCurrentUser = (setCurrentUser) => {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((item) => {
          return item.email === localStorage.getItem("userEmail");
        })[0]
    );
  });
};

export const editProfile = async (userID, payload) => {
  let userToEdit = doc(userRef, userID);
  await updateDoc(userToEdit, payload)
    .then(() => {
      toast.success("Profile has been updated successfully");
    })
    .catch((err) => console.log(err));
};
