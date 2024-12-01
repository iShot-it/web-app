import axios, { AxiosError, AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // withCredentials: true,
  });
  
  export default axiosInstance;
  

  
  function getCookie(name: string): string | null {
    if (typeof document === 'undefined') {
      return null; // Return null if not in browser environment
    }
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
    return null;
  }
  
  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = getCookie('auth_token'); // Assuming 'accessToken' is the name of your cookie
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  // ----------------------------------------------------------------------
  
  export const fetcher = async <T extends any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const res = await axiosInstance.get(url, { ...config });
  
    return res.data.data;
  };
  
  export const mutator = async <Data>(
    request: AxiosRequestConfig
  ): Promise<Data> => {
    try {
      const res = await axiosInstance(request);
      return res.data;
    } catch (e: any) {
      if (e instanceof AxiosError) {
        throw e.response as any;
      }
      throw e;
    }
  };


  export const endpoints = {
    auth: {
      login: "/user/login",
      register: "/user/signup",
      resentToken: "auth/resend-token",
      resentTokenForgetPassword: "/auth/resend-password-reset-token",
      verify: "/auth/activate-account",
      forgetPassword: "/auth/forgot-password",
      verifyForgetPassword: "/auth/verify-password-reset-token",
      resetPassword: "/auth/reset-password",
      getGoogleAuth: "/auth/google-authurl",
      googleLoginAuth: "/auth/google-signin",
      googleRegisterAuth: "/auth/google-signup",
    },
    user: {
      profile: "/user",
      notification: "/notification",
      editProfile:(id:string)=> `/user/update/${id}`,
      avatarUpload: "/user/settings/avatar",
    },
    event: {
      root: "/event-media",
      create: "/event-media/s3create",
      uploadImage: "/mixr-cloudinary/get-signedurl",
      faceCapture: "/face-scanner/scan",
      addEventToRecent: (id: string) => `/event-media/recent/event/${id}`,
      addMediaToRecent: (eventId: string, mediaId: string) =>
        `/event-media/recent/event/${eventId}/media/${mediaId}`,
      getRecentEvents: `/event-media/recent/event`,
      getRecentMedias: `/event-media/recent/media`,
      id: (id: string) => `/event-media/${id}`,
      exploreEvent: (id: string) => `event-media/guest/explore/${id}`,
      updateMedia: (id: string) => `/event-media/${id}/media`,
      updateUserRole: `/event-media/sharedevent/accesslevel/update`,
      updateEventUser: (id: string) => `/event-media/${id}/users`,
      publicEvent: (id: string) => `/event-media/${id}/public/join`,
  
      invite: {
        preview: (id: string) => `/event-media/invite/preview/${id}`,
        accept: (id: string) => `/event-media/invite/accept/${id}?email=1`,
        root: (id: string) => `/event-media/${id}/invite`,
      },
      request: {
        preview: (id: string) => `/event-media/request/preview/${id}`,
        accept: (id: string) => `/event-media/request/accept/${id}?email=1`,
        root: (id: string) => `/event-media/${id}/request`,
      },
      explore: "/event-media/explore/all",
      uploadSignature: "/mixr-cloudinary/get-signature",
      guest: (id: string) => `/event-media/guest/explore/${id}`,
    },
    favorite: {
      root: "/favorite",
      id: (id: string) => `/favorite/${id}`,
      oneEvent: (event_id: string, media_id: string) =>
        `/favorite/${event_id}/${media_id}`,
    },
  };