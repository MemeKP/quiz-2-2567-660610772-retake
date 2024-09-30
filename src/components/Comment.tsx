"use client";
import { ReplyProps } from "@/libs/types";
import { CommentsProps } from "@/libs/types";
import Reply from './Reply';

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies, // เพิ่มการรับค่า replies
}: CommentsProps) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">
            {username}
          </span>
          <br />
          <span>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{likeNum} คน</span>
          </div>
        </div>
      </div>

      {/* Loop through the replies and render Reply component */}
      <div className="ps-5">
        {replies && replies.map((reply: ReplyProps, index: number) => (
          <Reply key={index} {...reply} />
        ))}
      </div>
    </div>
  );
}