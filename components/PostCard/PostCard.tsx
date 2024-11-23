import Image from "next/image";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Post } from "@/types/type";
import { avatar } from "@/lib/constant";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow mb-4 max-w-lg mx-auto">
      {/* Post Header */}
      <div className="flex items-center p-4">
        <div className="relative h-10 w-10 mr-3">
          <Image
            src={post.image || avatar}
            alt={post.user.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-gray-900">{post.user.name}</h2>
          <p className="text-sm text-gray-500">{post.timeAgo}</p>
        </div>
      </div>

      {/* Post Image */}
      <div className="relative aspect-square">
        <Image
          src={post.image}
          alt={post.caption || "Post image"}
          fill
          className="object-cover"
        />
        {/* iShot Watermark */}
        {post.location && (
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
        )}
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            <Heart className="w-6 h-6" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            <MessageCircle className="w-6 h-6" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
        {post.caption && <p className="mt-3 text-gray-900">{post.caption}</p>}
      </div>
    </article>
  );
}
