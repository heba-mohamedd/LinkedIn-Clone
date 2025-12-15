import React, { lazy, Suspense, useEffect, useState } from "react";
import { Card, Button, Skeleton, Avatar } from "antd";
import { LiaUserEditSolid } from "react-icons/lia";
import { getSingleStatus, getSingleUser } from "../../api";
import { useLocation } from "react-router-dom";

const PostsCard = lazy(() => import("./PostsCard"));

export function ProfileCard({ currentUser, onEdit }) {
  const location = useLocation();
  const [allStatuses, setAllStatuses] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});

  useEffect(() => {
    const { id, email } = location.state || {};

    if (id) getSingleStatus(setAllStatuses, id);
    if (email) getSingleUser(setCurrentProfile, email);
    if (!email) setCurrentProfile({});
  }, [location?.state?.id, location?.state?.email]);

  const profile =
    Object.keys(currentProfile).length === 0 ? currentUser : currentProfile;

  const canEdit = currentUser?.id === location?.state?.id;

  return (
    <div className="flex flex-col items-center mt-6">
      {/* PROFILE CARD */}
      <Card className=" w-full max-w-4xl rounded-2xl shadow-sm">
        {/* Edit button */}
        {canEdit && (
          <div className="flex justify-end mb-4">
            <Button onClick={onEdit} icon={<LiaUserEditSolid size={18} />}>
              Edit
            </Button>
          </div>
        )}

        {/* Profile Info */}
        <div>
          <h2 className="text-2xl font-bold">{profile?.name}</h2>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-1 text-gray-800">{profile?.headline}</p>

              {(profile?.city || profile?.country) && (
                <p className="text-gray-500">
                  {profile?.city} {profile?.city && profile?.country && ","}{" "}
                  {profile?.country}
                </p>
              )}
            </div>

            {profile?.website && (
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                {profile.website}
              </a>
            )}

            <div>
              <p className="mb-1 text-gray-800">{profile?.company}</p>
              <p className="text-gray-500">{profile?.college}</p>
            </div>

            {profile?.aboutMe && (
              <p className="text-gray-800 col-span-full">{profile.aboutMe}</p>
            )}

            {profile?.skills && (
              <p className="col-span-full">
                <span className="font-semibold">Skills:</span> {profile.skills}
              </p>
            )}
          </div>
        </div>
      </Card>

      {/* POSTS */}
      <Suspense
        fallback={
          <div className="w-full max-w-4xl mt-6 space-y-4">
            {[...Array(5)].map((_, i) => (
              <Card key={i} className="rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Skeleton.Avatar active size={48} />
                  <Skeleton.Input active size="small" />
                </div>
                <Skeleton paragraph={{ rows: 2 }} active />
              </Card>
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
