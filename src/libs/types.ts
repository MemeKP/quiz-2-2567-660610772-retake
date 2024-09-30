// You can define interfaces for all React components here.
// Do not forget to export properly.
interface CommentsProps {
    userImagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps[] | any;
  }
  export type {CommentsProps};
  
  interface ReplyProps {
      userImagePath: string;
      username: string;
      replyText: string;
      likeNum: number |any;
  }
  export type { ReplyProps };
  
  interface PostOwnerProps {
    userImagePath: string;
    username: string;
    postText: string;
    likeNum: number;
  }
  export type { PostOwnerProps };