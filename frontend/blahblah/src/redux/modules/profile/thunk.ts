import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProfileFeedType } from "../../../model/profile/profileFeedType";
import { AboutMeType } from "../../../model/user/aboutMeType";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { getAccessToken } from "../user/token";

// 프로필 정보 가져오기
export const getAboutMeAction = createAsyncThunk(
  "GET_ABOUTME",
  async (userPK: string, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const { data } = await axios.get(`/api/aboutme/${parseInt(userPK)}`);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 자기소개 추가
export const addAboutMeAction = createAsyncThunk(
  "ADD_ABOUTME",
  async (aboutMeData: string, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const { data } = await axios.post(`/api/aboutme`, aboutMeData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getAccessToken(),
        },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 자기소개 수정
export const updateAboutMeAction = createAsyncThunk(
  "UPDATE_ABOUTME",
  async (aboutMeData: AboutMeType, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const { data } = await axios.put(`/api/aboutme`, aboutMeData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Baerer " + getAccessToken(),
        },
      });
      return data;
    } catch (e) {
      console.error(e);
      return rejectWithValue(e);
    }
  }
);

// 구독중인지
export const getIsSubscribeAction = createAsyncThunk(
  "GET_IS_SUB",
  async (_, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const { data } = await axios.get(`/api/subscribe`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getAccessToken(),
        },
      });

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 구독 추가
export const subscribeAction = createAsyncThunk(
  "SUBSCRIBE",
  async (userPK: string, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const { data } = await axios.post(`/api/subscribe/${parseInt(userPK)}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getAccessToken(),
        },
      });

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 구독 취소
export const unSubscribeAction = createAsyncThunk(
  "UNSUBSCRIBE",
  async (userPK: string, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const { data } = await axios.delete(
        `/api/subscribe/${parseInt(userPK)}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getAccessToken(),
          },
        }
      );

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 피드 가져오기
export const getFeedAction = createAsyncThunk(
  "GET_FEED",
  async (userPK: string, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const { data } = await axios.delete<ProfileFeedType[]>(
        `/api/articles/${parseInt(userPK)}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getAccessToken(),
          },
        }
      );

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
