"use client";
import { useGetAllPost } from "@/app/api/posts";
import PostCard from "@/components/PostCard/PostCard";
// import Search from "@/components/Search/Search";
import { avatar } from "@/lib/constant";
import { Post } from "@/types/type";
import PostSkeleton from "../PostSkeletonLoader/PostSkeletonLoader";

export default function Posts() {
  const { posts, isFetchingPosts } = useGetAllPost();
  // const posts: Post[] = [
  //   {
  //     id: "1",
  //     user: {
  //       name: "Henry_Mark",
  //       avatar: "/placeholder.svg?height=40&width=40",
  //     },
  //     image: avatar,
  //     location: "12 Apuji Ironsi Street, Maitama, Abuja",
  //     timestamp: "07 Nov, 2024, 9pm",
  //     likes: 134,
  //     comments: 8,
  //     timeAgo: "3h",
  //   },
  //   {
  //     id: "2",
  //     user: {
  //       name: "Jules_Peters",
  //       avatar: "/placeholder.svg?height=40&width=40",
  //     },
  //     image: avatar,
  //     timestamp: "07 Nov, 2024, 9pm",
  //     caption: "...or until everyone can sleep through the night.",
  //     likes: 89,
  //     comments: 5,
  //     timeAgo: "4d",
  //   },
  //   {
  //     id: "3",
  //     user: {
  //       name: "Jules_Peters",
  //       avatar: "/placeholder.svg?height=40&width=40",
  //     },
  //     image: avatar,
  //     timestamp: "07 Nov, 2024, 9pm",
  //     caption: "...or until everyone can sleep through the night.",
  //     likes: 89,
  //     comments: 5,
  //     timeAgo: "4d",
  //   },
  //   {
  //     id: "4",
  //     user: {
  //       name: "Jules_Peters",
  //       avatar: "/placeholder.svg?height=40&width=40",
  //     },
  //     image: avatar,
  //     timestamp: "07 Nov, 2024, 9pm",
  //     caption: "...or until everyone can sleep through the night.",
  //     likes: 89,
  //     comments: 5,
  //     timeAgo: "4d",
  //   },
  // ];
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
        {(posts || []).map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
