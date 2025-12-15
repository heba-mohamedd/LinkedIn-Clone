import React, { lazy, Suspense, useEffect, useState } from "react";
import { Avatar, Card, Button } from "antd";
import moment from "moment";
import DefaultProfile from "../../assets/profile.webp";
import { ModalComponent } from "./Modal";
import { getStatus, postStatus } from "../../api";
import { getUniqueID } from "../../helpers/getUniqueID";
import Loader from "./Loader";

const PostsCard = lazy(() => import("./PostsCard"));

export function PostUpdata({ currentUser }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatuses] = useState([]);

  const sendStatus = async () => {
    const object = {
      status,
      timeStamp: moment().format("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.name,
      userID: currentUser.id,
      postID: getUniqueID(),
    };

    await postStatus(object);
    setModalOpen(false);
    setLoading(false);
    setStatus("");
  };

  useEffect(() => {
    getStatus((data) => {
      setAllStatuses(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mt-6 flex flex-col items-center ">
      {/* Start a Post */}
      <Card className="w-full max-w-3xl rounded-2xl shadow-sm mb-6 ">
        <div className="flex items-center gap-4">
          <Avatar size={50} src={DefaultProfile} />

          <Button
            type="default"
            className="w-full text-left rounded-full py-2 px-4 text-gray-600 font-medium"
            onClick={() => setModalOpen(true)}
          >
            Start a Post
          </Button>
        </div>
      </Card>

      {/* Modal */}
      <ModalComponent
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setStatus={setStatus}
        status={status}
        sendStatus={sendStatus}
      />

      {/* Posts */}
      {loading ? (
        <Loader>Plase Waiting...</Loader>
      ) : (
        <Suspense fallback={<Loader>Loading posts...</Loader>}>
          {allStatuses.map((status) => (
            <PostsCard post={status} key={status.postID} />
          ))}
        </Suspense>
      )}
    </div>
  );
}
