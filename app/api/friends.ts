// import { getAuthToken } from "@/utils";
import {
    // useInfiniteQuery,
    useMutation,
    useQuery,
  } from "@tanstack/react-query";
  import { useMemo } from "react";
  // import { endpoints, fetcher, mutator } from "../axios";
  import { IFriendsList, IUpdateUser, IUser } from "@/types/type";
  import { endpoints, fetcher, mutator } from "@/axios";
  import { queryKeys } from "@/React-Query";
  import { useAuth } from "@/context/AuthContext";
  
  export function useGetFriends(option?: { enabled: boolean }) {
    console.log(option, "option");
  //   const accessToken = getAuthToken();
    const { data, isLoading, refetch, isRefetching, error, isError } = useQuery<IFriendsList>({
      queryKey: queryKeys.user.root,
      queryFn: () => fetcher(endpoints.friends.friendslist),
      // enabled: option?.enabled || !!accessToken,
    });
  
    return useMemo(
      () => ({
        profileData: data,
        profileRefetch: refetch,
        profileLoading: isLoading,
        isRefetching,
        error,
        isError,
      }),
      [data, isLoading, refetch, isRefetching, error, isError]
    );
  }