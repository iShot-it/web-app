export default function LoadingSkeleton() {
  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="h-8 w-32 bg-muted animate-pulse rounded-lg mx-auto" />
      </div>

      {/* Profile Picture and Username */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-32 h-32 rounded-full bg-muted animate-pulse" />
        <div className="h-6 w-24 bg-muted animate-pulse rounded-md" />
      </div>

      {/* Edit Profile Button */}
      <div className="flex justify-center">
        <div className="h-10 w-28 bg-muted animate-pulse rounded-md" />
      </div>

      {/* Profile Information */}
      <div className="space-y-6">
        {/* First Name */}
        <div className="space-y-2">
          <div className="h-4 w-16 bg-muted animate-pulse rounded" />
          <div className="h-10 w-full bg-muted animate-pulse rounded-md" />
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <div className="h-4 w-16 bg-muted animate-pulse rounded" />
          <div className="h-10 w-full bg-muted animate-pulse rounded-md" />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <div className="h-4 w-20 bg-muted animate-pulse rounded" />
          <div className="h-10 w-full bg-muted animate-pulse rounded-md" />
        </div>
      </div>
    </div>
  );
}
