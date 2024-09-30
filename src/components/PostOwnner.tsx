"use client";
import { PostOwnerProps } from "@/libs/types"
export default function PostOwnner({
  userImagePath,
  username,
  postText,
  likeNum,
}: PostOwnerProps) {
  return (
    <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src={userImagePath}
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5">
              {username}
              {/* Panita Donmuang 660610772 */}
            </span>
          </div>

          <span>
            {postText}
          </span>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>{likeNum}คน</span>
          </div>
          <hr className="m-0 border" />
        </div>
  );
}
