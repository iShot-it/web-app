// import { getAuthToken } from "@/utils";
import {
    // useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
  } from "@tanstack/react-query";
  import { useMemo } from "react";
  // import { endpoints, fetcher, mutator } from "../axios";
  import { IPosts,  } from "@/types/type";
  import { endpoints,  fetchermgt, mutatormgt } from "@/axios";
  import { queryKeys } from "@/React-Query";
  
  export function useGetAllPost(option?: { enabled: boolean }) {
    console.log(option, "option");
  //   const accessToken = getAuthToken();
    const { data, isLoading, refetch, isRefetching, error, isError } = useQuery<IPosts>({
      queryKey: queryKeys.posts.posts,
      queryFn: () => fetchermgt(endpoints.posts.posts),
      // enabled: option?.enabled || !!accessToken,
    });
  
    return useMemo(
      () => ({
        posts: data,
        postRefetch: refetch,
        isFetchingPosts: isLoading,
        isRefetching,
        error,
        isError,
      }),
      [data, isLoading, refetch, isRefetching, error, isError]
    );
  }

  export function useLikePost() {
    // const {loggedInUser}= useAuth()
     const queryClient = useQueryClient();
     const { mutateAsync, data, isPending, isError, error } = useMutation<
        any,
       any,
       {postid:string}
     >({
       mutationFn: (values: {postid:string}) =>
         mutatormgt({ method: "POST", data: values, url: endpoints.posts.like }),
       onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: queryKeys.posts.posts });
       },
     });
   
     return useMemo(
       () => ({
         likePost: mutateAsync,
         data,
         isLikingPost: isPending,
         error,
         isError,
       }),
       [mutateAsync, data, isPending, error, isError]
     );
   }

  export function useDisLikePost() {
    // const {loggedInUser}= useAuth()
     const queryClient = useQueryClient();
     const { mutateAsync, data, isPending, isError, error } = useMutation<
        any,
       any,
       {postid:string}
     >({
       mutationFn: (values: {postid:string}) =>
         mutatormgt({ method: "DELETE", data: values, url: endpoints.posts.dislike }),
       onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: queryKeys.posts.posts });
       },
     });
   
     return useMemo(
       () => ({
        disLikePost: mutateAsync,
         data,
         isdisLikingPost: isPending,
         error,
         isError,
       }),
       [mutateAsync, data, isPending, error, isError]
     );
   }
   
