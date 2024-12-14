// import { getAuthToken } from "@/utils";
import {
  useMutation,
    // useInfiniteQuery,
    // useMutation,
    useQuery,
    useQueryClient,
  } from "@tanstack/react-query";
  import { useMemo } from "react";
  // import { endpoints, fetcher, mutator } from "../axios";
  import { IFriendsList, SearchResponse } from "@/types/type";
  import { endpoints, fetcher, mutator } from "@/axios";
  import { queryKeys } from "@/React-Query";
  
  export function useGetFriendsList(option?: { enabled: boolean }) {
    console.log(option)
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

  // export function useFriendsSearch1(option?: { search: string }) {
  //   console.log(option, "search")
  //   const { data, isLoading, refetch, isRefetching, error, isError } = useQuery({
  //     queryKey: [queryKeys.friends.friendsearch, option?.search],
  //     queryFn: () => fetcher(endpoints.friends.friendsearch, { method: "POST", data: { search: option?.search } }),
  //     enabled: !!option?.search,
  //   });
  
  
  //   return useMemo(
  //     () => ({
  //       searchResult: data,
  //       frientsListsRefetch: refetch,
  //       isSearching: isLoading,
  //       isRefetching,
  //       error,
  //       isError,
  //     }),
  //     [data, isLoading, refetch, isRefetching, error, isError]
  //   );
  // }

  export function useFriendsSearch() {
    // const queryClient = useQueryClient();
    const { mutateAsync, data, isPending, isError, error } = useMutation<
       SearchResponse,
      any,
     {search:string}
    >({
      mutationFn: (values: {search:string}) =>
        mutator({ method: "POST", data: values, url: endpoints.friends.friendsearch }),
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
      },
      
    });
  
    return useMemo(
      () => ({
        searchFriend: mutateAsync,
        data,
        isRegistering: isPending,
        error,
        isError,
      }),
      [mutateAsync, data, isPending, error, isError]
    );
  }

  export function useSendFriendRequest() {
    const queryClient = useQueryClient();
    const { mutateAsync, data, isPending, isError, error } = useMutation<
       SearchResponse,
      any,
     {requestUser:string}
    >({
      mutationFn: (values: {requestUser:string}) =>
        mutator({ method: "POST", data: values, url: endpoints.friends.friendrequest }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKeys.friends.friendsearch });
      },
      
    });
  
    return useMemo(
      () => ({
        sendFriendRequest: mutateAsync,
        data,
         isPending,
        error,
        isError,
      }),
      [mutateAsync, data, isPending, error, isError]
    );
  }