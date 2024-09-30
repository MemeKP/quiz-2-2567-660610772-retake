"use client";

import { ReplyProps } from "@/libs/types";

export default function Reply({ userImagePath, username, replyText, likeNum }: ReplyProps) {
  return (
    <div className="d-flex gap-2 my-2 ps-5">
      {/* รูปภาพโปรไฟล์ของผู้ตอบ */}
      <img
        src={userImagePath}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      {/* กล่องข้อความของผู้ตอบ */}
      <div className="rounded rounded-3 p-2" style={{ backgroundColor: "#E5E7EB" }}>
        <span className="fw-semibold">
          {username}
        </span>
        <br />
        <span>{replyText}</span>
        <div className="d-flex align-items-center gap-1">
          {/* แสดงจำนวนไลค์ */}
          <img src="/like.svg" width={20}></img>
          <span className="text-muted">{likeNum} คน</span>
        </div>
      </div>
    </div>
  );
}
