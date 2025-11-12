import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { toast } from "react-toastify";

const dbRef = collection(firestore, "posts");
export const postStatus = async (status) => {
  let object = {
    status: status,
  };

  await addDoc(dbRef, object)
    .then((res) => {
      console.log(res);
      toast.success("Document has been added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const getPosts = async () => {
//   const posts = await getDocs(dbRef);
//   console.log(posts);
// };
