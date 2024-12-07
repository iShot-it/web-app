
"use client"
import Image from "next/image";
import TimeAgo from "timeago-react";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Post } from "@/types/type";
import { avatar } from "@/lib/constant";
import PostMedia from "../PostMedia/PostMedia";
import {  useLikePost } from "@/app/api/posts";
import { FcLike } from "react-icons/fc";
import { useRouter } from "next/navigation";
interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {

  const router = useRouter()
  const { likePost } = useLikePost();
  // const { disLikePost } = useDisLikePost();
  const handleLikePostClick = async (postid: string) => {
    try {
      const response = await likePost({ postid });
      console.log(response, "response liking post");
    } catch (error) {
      console.log(error, "error liking post");
    }
  };

  // const handleDisLikePostClick = async (postid: string) => {
  //   try {
  //     const response = await disLikePost({ postid });
  //     console.log(response, "response liking post");
  //   } catch (error) {
  //     console.log(error, "error liking post");
  //   }
  // };

  return (
    <article onClick={()=>router.push(`/post/${post._id}`)} className="bg-white rounded-lg border-b mb-4 max-w-lg mx-auto">
      {/* Post Header */}
      <div className="flex items-center p-4">
        <div className="relative h-10 w-10 mr-3">
          <Image
            src={post.userInfo.photo || avatar}
            alt={post.userInfo.username}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-gray-900">{post.userInfo.username}</h2>
          <p className="text-sm text-gray-500">
            <TimeAgo datetime={post.createdAt} locale="en-US" />
          </p>
        </div>
      </div>

      {/* Post Image */}
      <div>
        <div className="text-xs my-2">
          <p className="">{post.post}</p>
          <p className="text-gray-500 italic">
            <TimeAgo datetime={post.createdAt} locale="en-US" />
          </p>
        </div>
        <PostMedia mediaUrls={post.media} />
      </div>

      {/* <div className="relative aspect-square">
        <Image
          src={post.media[0]}
          alt={post.post || "Post image"}
          fill
          className="object-cover"
        /> */}
      {/* iShot Watermark */}
      {/* {post.location && (
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg px-3 py-2 flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="iShot logo"
              width={20}
              height={20}
              className="rounded"
            />
            <div className="text-xs">
              <p className="font-medium">{post.location}</p>
              <p className="text-gray-500">{post.timestamp}</p>
            </div>
          </div>
        )} */}
      {/* </div> */}

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            {post?.likeCount > 0 ? (
              <FcLike
                size={25}
                className="w-6 h-6 "
                onClick={  () => handleLikePostClick(post._id) //we need to check who if i have like the post before
}
              />
            ) : (
              <Heart
                size={30}
                className="w-6 h-6 "
                onClick={() => handleLikePostClick(post._id)}
              />
            )}

            <span>{post.likeCount}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            <MessageCircle className="w-6 h-6" />
            <span>{post.commentCount}</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <Dialog>
              <DialogTrigger>
                <Share2 className="w-6 h-6" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <div className="flex justify-center space-x-4">
                      <FacebookShareButton url={post.link} title={post.post}>
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>

                      <TwitterShareButton url={post.link} title={post.post}>
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>

                      <LinkedinShareButton url={post.link} title={post.post}>
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>

                      <WhatsappShareButton
                        url={post.link}
                        title={post.post}
                        separator=":: "
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </button>
        </div>
        {/* {post.caption && <p className="mt-3 text-gray-900">{post.caption}</p>} */}
      </div>
    </article>
  );
}

{
  /*  */
}