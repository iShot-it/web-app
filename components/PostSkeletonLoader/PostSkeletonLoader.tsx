import React from 'react'

const PostSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto">
      {/* User info */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse mr-3"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        </div>
      </div>

      {/* Image skeleton */}
      <div className="aspect-square bg-gray-200 rounded-lg mb-4 animate-pulse"></div>

      {/* Location info */}
      <div className="flex items-center mb-4">
        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse mr-2"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
      </div>

      {/* Action buttons */}
      <div className="flex space-x-4">
        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Like count */}
      <div className="h-3 bg-gray-200 rounded w-1/4 mt-4 animate-pulse"></div>
    </div>
  )
}

export default PostSkeleton