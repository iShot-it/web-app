"use client";
import { useGetAllPost } from "@/app/api/posts";
import PostCard from "@/components/PostCard/PostCard";
// import Search from "@/components/Search/Search";

import PostSkeleton from "../PostSkeletonLoader/PostSkeletonLoader";

export default function Posts() {
  const { posts, isFetchingPosts } = useGetAllPost();

if(isFetchingPosts){
  return (
    <div className="min-h-screen w-full  pb-8 px-4">
      <div className=" mx-auto w-full space-y-6 border-b">
        {
          [1,2,3,4,5,6,7].map((i) => <PostSkeleton key={i}/>)
        }
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen w-full  pb-8 px-4">
      <div className=" mx-auto w-full space-y-6 border-b">
        {(posts || []).map((post) => {
          if (post.isPrivate) return null;
          return <PostCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}
