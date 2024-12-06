"use client";
import { useGetSinglePost } from "@/app/api/posts";
import PostCard from "@/components/PostCard/PostCard";
import { Post } from "@/types/type";
import {  ChevronsLeft } from "lucide-react";
import React, { useEffect } from "react";

const SinglePost = ({ params }: { params: { postid: string } }) => {
  const [post, setPost] = React.useState<Post>();

  const { singlePost } =
    useGetSinglePost();

  useEffect(() => {
    const getSinglePOst = async () => {
      try {
        const response = await singlePost({ postid: params.postid });
        setPost(response.data);
        console.log(response, "response liking post");
      } catch (error) {
        console.log(error, "error liking post");
      }
    };
    getSinglePOst();
  }, []);

  console.log(params, "params");
  return <div>
    <button className="flex items-center mt-4 ml-4" onClick={()=>window.history.back()}><ChevronsLeft /> Back</button>
    {post && <PostCard post={post} />}</div>;
};

export default SinglePost;
