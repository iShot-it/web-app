import PostCard from "@/components/PostCard/PostCard";
// import Search from "@/components/Search/Search";
import { avatar } from "@/lib/constant";
import { Post } from "@/types/type";
import { useGetAllPost } from "../api/posts";
import Posts from "@/components/Posts/Post";

export default function Home() {
  return <Posts />;
}
