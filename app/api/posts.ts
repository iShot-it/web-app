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
  import { endpoints, fetcher, fetchermgt, mutator, mutatormgt } from "@/axios";
  import { queryKeys } from "@/React-Query";
import { useAuth } from "@/context/AuthContext";
  
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
    const {loggedInUser}= useAuth()
    //  const queryClient = useQueryClient();
     const { mutateAsync, data, isPending, isError, error } = useMutation<
        any,
       any,
       {id:string}
     >({
       mutationFn: (values: {id:string}) =>
         mutatormgt({ method: "P0sT", data: values, url: endpoints.posts.like }),
       onSuccess: () => {
        //  queryClient.invalidateQueries({ queryKey: queryKeys.posts.posts });
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
   
