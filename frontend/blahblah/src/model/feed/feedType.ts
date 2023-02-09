import { CommentType } from "./commentType";

export type FeedType = {
  id: number;
  title: string;
  content: string;
  createDate: string;
  lastModifiedDate: string;
  like: boolean;
  likeCnt: number;

  userPK: number;
  userId: string;
  userAvatar: string | null;
  userNickName: string;

  commentList: CommentType[];
};
