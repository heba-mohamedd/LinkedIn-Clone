import { Button } from "antd";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { LiaUserEditSolid } from "react-icons/lia";
import { getSingleStatus, getSingleUser } from "../../api";
import { useLocation } from "react-router-dom";

const PostsCard = lazy(() => import("./PostsCard"));

export function ProfileCard({ currentUser, onEdit }) {
  const location = useLocation();
  const [allStatuses, setAllStatuses] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});

  // Load data
  useEffect(() => {
    const { id, email } = location.state || {};

    if (id) getSingleStatus(setAllStatuses, id);
    if (email) getSingleUser(setCurrentProfile, email);
    if (!email) setCurrentProfile({});
  }, [location?.state?.id, location?.state?.email]);

  // computed profile to reduce repeated logic
  const profile =
    Object.keys(currentProfile).length === 0 ? currentUser : currentProfile;
  console.log(profile.id);

  console.log(allStatuses);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mt-12 w-full max-w-3xl mx-auto bg-white shadow-sm rounded-2xl p-8 border border-gray-100 ">
        {/* Edit Button */}
        <div className="flex justify-end">
          <Button onClick={onEdit}>
            <LiaUserEditSolid size={22} />
            Edit
          </Button>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex flex-col w-full">
            <h4 className="text-3xl font-semibold text-gray-900 tracking-tight">
              {profile?.name}
            </h4>

            <div className="flex justify-between font-sans">
              <div>
                <p>{profile?.headline}</p>
                <p>{profile?.location}</p>
              </div>

              <div>
                <p>{profile?.company}</p>
                <p>{profile?.college}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      <Suspense
        fallback={
          <div className="grid grid-cols-1 gap-6 w-[70vw] mt-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="w-full max-w-4xl mx-auto bg-white shadow-sm rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        }
      >
        {allStatuses.map((status) => (
          <PostsCard post={status} key={status.postID} />
        ))}
      </Suspense>
    </div>
  );
}
