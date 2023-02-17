import { SessionType } from "../broadcast/sessionType";

export type ProfileUserType = {
  userPK: number;
  userId: string;
  nickName: string;
  avatar: string;
  subscribers: number;
  aboutMe: string;
  isOnAir: SessionType | null;
};

