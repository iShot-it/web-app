// import { getAuthToken } from "@/utils";
import {
    // useInfiniteQuery,
    // useMutation,
    useQuery,
  } from "@tanstack/react-query";
  import { useMemo } from "react";
  // import { endpoints, fetcher, mutator } from "../axios";
  import { IFriendsList, IUpdateUser, IUser } from "@/types/type";
  import { endpoints, fetcher, mutator } from "@/axios";
  import { queryKeys } from "@/React-Query";
  
  export function useGetFriendsList(option?: { enabled: boolean }) {
  //   const accessToken = getAuthToken();
    const { data, isLoading, refetch, isRefetching, error, isError } = useQuery<IFriendsList>({
      queryKey: queryKeys.friends.friendsList,
      queryFn: () => fetcher(endpoints.friends.friendslist),
      // enabled: option?.enabled || !!accessToken,
    });
  
    return useMemo(
      () => ({
        friendsList: data,
        frientsListsRefetch: refetch,
        isFetchingFriendList: isLoading,
        isRefetching,
        error,
        isError,
      }),
      [data, isLoading, refetch, isRefetching, error, isError]
    );
  }