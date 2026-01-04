import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { toast } from "react-toastify";

const postsRef = collection(firestore, "posts");
const userRef = collection(firestore, "users");
let likeRef = collection(firestore, "likes");
const commentRef = collection(firestore, "comments");
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

export const getSingleStatus = (setAllStatuses, id) => {
  const singlePostQuery = query(postsRef, where("userID", "==", id));
  onSnapshot(singlePostQuery, (response) => {
    setAllStatuses(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(userRef, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })[0]
    );
  });
};

export const likePost = (postId, userId, liked) => {
  try {
    let docToLike = doc(likeRef, `${userId}_${postId}`);
    if (liked) deleteDoc(docToLike);
    else setDoc(docToLike, { userId, postId });
  } catch (error) {
    console.log({ error });
  }
};

export const getLikesByUser = (userId, postId, setLiked, setLikesCount) => {
  try {
    let likeQuery = query(likeRef, where("postId", "==", postId));
    onSnapshot(likeQuery, (response) => {
      let likes = response.docs.map((doc) => doc.data());
      let likesCount = likes?.length;
      let isLiked = likes.some((like) => like.userId === userId);
      setLiked(isLiked);
      setLikesCount(likesCount);
    });
  } catch (error) {
    console.log(error);
  }
};

export const postComment = async (postId, comment, timeStamp, name) => {
  try {
    await addDoc(commentRef, { postId, comment, timeStamp, name }).then(() => {
      toast.success("Comment has been added successfully");
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCommentsByPost = (postId, setComments) => {
  try {
    let commentQuery = query(commentRef, where("postId", "==", postId));
    onSnapshot(commentQuery, (response) => {
      let comments = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setComments(comments);
    });
  } catch (error) {
    console.log(error);
  }
};
