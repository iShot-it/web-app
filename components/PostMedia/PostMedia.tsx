"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface PostMediaProps {
  mediaUrl: string;
}

export default function PostMedia({ mediaUrl }: PostMediaProps) {
  const [mediaType, setMediaType] = useState<
    "image" | "video" | "audio" | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const determineMediaType = async () => {
      if (!mediaUrl) {
        setMediaType(null);
        setIsLoading(false);
        return;
      }

      const extension = mediaUrl.split(".").pop()?.toLowerCase();

      if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension || "")) {
        setMediaType("image");
      } else if (["mp4", "webm", "ogg"].includes(extension || "")) {
        setMediaType("video");
      } else if (["mp3", "wav", "ogg"].includes(extension || "")) {
        setMediaType("audio");
      }
      //   else {
      //     // If we can't determine the type from the extension, we'll try to fetch the content type
      //     try {
      //       const response = await fetch(mediaUrl, { method: "HEAD" });
      //       const contentType = response.headers.get("Content-Type");
      //       if (contentType?.startsWith("image/")) {
      //         setMediaType("image");
      //       } else if (contentType?.startsWith("video/")) {
      //         setMediaType("video");
      //       } else if (contentType?.startsWith("audio/")) {
      //         setMediaType("audio");
      //       } else {
      //         setMediaType(null);
      //       }
      //     } catch (error) {
      //       console.error("Error determining media type:", error);
      //       setMediaType(null);
      //     }
      //   }
      setIsLoading(false);
    };

    determineMediaType();
  }, [mediaUrl]);

  if (isLoading) {
    return <div className="h-48 w-full bg-gray-200 animate-pulse"></div>;
  }

  switch (mediaType) {
    case "image":
      return (
        <div className="relative aspect-video w-full">
          <Image
            src={mediaUrl}
            alt="Post image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      );
    case "video":
      return (
        <div className="relative aspect-video w-full">
          <video src={mediaUrl} controls className="h-full w-full object-cover">
            Your browser does not support the video tag.
          </video>
        </div>
      );
    case "audio":
      return (
        <div className="w-full">
          <audio src={mediaUrl} controls className="w-full">
            Your browser does not support the audio tag.
          </audio>
        </div>
      );
    default:
      return null;
  }
}
