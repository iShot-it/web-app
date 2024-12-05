// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import React from "react";

// import PostSkeleton from "../PostSkeletonLoader/PostSkeletonLoader";

// interface PostMediaProps {
//   mediaUrl: string;
// }

// export default function PostMedia({ mediaUrl }: PostMediaProps) {
//   const [mediaType, setMediaType] = useState<
//     "image" | "video" | "audio" | null
//   >(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const determineMediaType = async () => {
//       if (!mediaUrl) {
//         setMediaType(null);
//         setIsLoading(false);
//         return;
//       }

//       const extension = mediaUrl.split(".").pop()?.toLowerCase();

//       if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension || "")) {
//         setMediaType("image");
//       } else if (["mp4", "webm", "ogg"].includes(extension || "")) {
//         setMediaType("video");
//       } else if (["mp3", "wav", "ogg"].includes(extension || "")) {
//         setMediaType("audio");
//       }

//       setIsLoading(false);
//     };

//     determineMediaType();
//   }, [mediaUrl]);

//   if (isLoading) {
//     return <PostSkeleton />;
//   }

//   switch (mediaType) {
//     case "image":
//       return (
//         <div className="relative aspect-video w-full">
//           <Image
//             src={mediaUrl}
//             alt="Post image"
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//         </div>
//       );
//     case "video":
//       return (
//         <div className="relative aspect-[14/16] w-full">
//           <video
//             src={mediaUrl}
//             controls
//             controlsList="nodownload"
//             className="h-full w-full object-cover"
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       );
//     case "audio":
//       return (
//         <div className="w-full">
//           <audio src={mediaUrl} controls className="w-full">
//             Your browser does not support the audio tag.
//           </audio>
//         </div>
//       );
//     default:
//       return null;
//   }
// }

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import PostSkeleton from "../PostSkeletonLoader/PostSkeletonLoader";

interface MediaItem {
  url: string;
  type: "image" | "video" | "audio";
}

interface PostMediaProps {
  mediaUrls: string[];
}

export default function PostMedia({ mediaUrls }: PostMediaProps) {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const determineMediaTypes = async () => {
      if (!mediaUrls) {
        setMediaItems([]);
        setIsLoading(false);
        return;
      }

      const urls = Array.isArray(mediaUrls) ? mediaUrls : [mediaUrls];
      const items = urls.map((url) => {
        const extension = url.split(".").pop()?.toLowerCase();
        let type: "image" | "video" | "audio" = "image";

        if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension || "")) {
          type = "image";
        } else if (["mp4", "webm", "ogg"].includes(extension || "")) {
          type = "video";
        } else if (["mp3", "wav", "ogg"].includes(extension || "")) {
          type = "audio";
        }

        return { url, type };
      });

      setMediaItems(items);
      setIsLoading(false);
    };

    determineMediaTypes();
  }, [mediaUrls]);

  if (isLoading) {
    return <PostSkeleton />;
  }

  if (mediaItems.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderMediaItem = (item: MediaItem) => {
    switch (item.type) {
      case "image":
        return (
          <div className="relative aspect-video w-full">
            <Image
              src={item.url}
              alt="Post image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        );
      case "video":
        return (
          <div className="relative aspect-square w-full">
            <video
              src={item.url}
              controls
              controlsList="nodownload"
              className="h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        );
      case "audio":
        return (
          <div className="w-full">
            <audio src={item.url} controls className="w-full">
              Your browser does not support the audio tag.
            </audio>
          </div>
        );
    }
  };

  return (
    <div className="relative">
      {renderMediaItem(mediaItems[currentIndex])}
      {mediaItems.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {mediaItems.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
