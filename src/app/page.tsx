import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments as Comments } from "@/libs/comments";
import { CommentsProps, PostOwnerProps } from "@/libs/types";


export default function Home() {

  const postOwnerData: PostOwnerProps = {
    userImagePath: "/profileImages/MyImage.jpg",
    username: "Panita Donmuang 660610772",
    postText: "Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207",
    likeNum: 100,
  }
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example */}
        <PostOwnner {...postOwnerData} /> {/* Use the correct component and data object */}

        {/* Comment Section */}
        {Comments.map((comment: CommentsProps, index) => (
          <div key={index}>
            {/* Render Comment with replies */}
            <Comment
              userImagePath={comment.userImagePath}
              username={comment.username}
              commentText={comment.commentText}
              likeNum={comment.likeNum}
              replies={comment.replies} // ส่ง replies เข้าสู่ Comment
            />
          </div>
        ))}
      </div>
    </div>
  );
}