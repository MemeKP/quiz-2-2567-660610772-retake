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
        <PostOwnner {...postOwnerData} /> 

        {/* Comment Section */}
        {Comments.map((comment: CommentsProps, index) => (
          <div key={index}>
            {/* Render Comment with replies */}
            <Comment
              username={comment.username}
              userImagePath={comment.userImagePath}
              commentText={comment.commentText}
              likeNum={comment.likeNum}
              replies={comment.replies} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}