import axios, {  AxiosRequestConfig } from "axios";

export enum ApiType {
  USERMGT = 'USERMGT',
  NEWSMGT = 'NEWSMGT',
}

const createAxiosInstance = (baseUrlKey: ApiType) => {
  // Mapping of API types to their respective base URLs
  const baseUrls = {
    [ApiType.USERMGT]: process.env.NEXT_PUBLIC_API_URL_USERMGT,
    [ApiType.NEWSMGT]: process.env.NEXT_PUBLIC_API_URL_NEWSMGT,
  };
  const axiosInstance = axios.create({
    baseURL: baseUrls[baseUrlKey],
    // Add timeout to prevent hanging requests
    timeout: 10000,
  });

  function getCookie(name: string): string | null {
    // Ensure this runs only in browser environment
    if (typeof window === 'undefined') {
      return null;
    }
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
    return null;
  }

  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = getCookie('auth_token');
      
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Add response interceptor for global error handling
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Optional: add global error handling logic
      console.error('API Error:', error);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const usermgtApi = createAxiosInstance(ApiType.USERMGT);
export const newsmgtApi = createAxiosInstance(ApiType.NEWSMGT);

// Generic fetcher with improved type safety
export const fetcher = async <T>(
  url: string, 
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const res = await usermgtApi.get(url, { ...config });
    return res.data.data;
  } catch (error) {
    // Add error handling
    console.error('Fetcher error:', error);
    throw error;
  }
};

export const fetchermgt = async <T>(
  url: string, 
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const res = await newsmgtApi.get(url, { ...config });
    return res.data.data;
  } catch (error) {
    console.error('Fetchermgt error:', error);
    throw error;
  }
};

export const mutator = async <Data>(
  request: AxiosRequestConfig
): Promise<Data> => {
  try {
    const res = await usermgtApi(request);
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      throw e.response?.data || e;
    }
    throw e;
  }
};

export const mutatormgt = async <Data>(
  request: AxiosRequestConfig
): Promise<Data> => {
  try {
    const res = await newsmgtApi(request);
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      throw e.response?.data || e;
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
   friends:{
      friendslist :"/friends/list"
   }
  };