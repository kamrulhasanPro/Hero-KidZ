// ------------------ Product Details Skeleton ------------------
export function ProductDetailsSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 animate-pulse">
      {/* Image */}
      <div className="h-80 bg-gray-300 rounded-xl"></div>

      {/* Details */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>

        <div className="flex gap-3">
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
          <div className="h-6 w-12 bg-gray-300 rounded"></div>
        </div>

        <div className="h-4 bg-gray-300 rounded w-1/3"></div>

        {/* Info list */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>

        <div className="h-10 bg-gray-300 rounded"></div>
      </div>

      {/* Description */}
      <div className="md:col-span-2 space-y-2">
        <div className="h-5 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>

      {/* QnA */}
      <div className="md:col-span-2 space-y-3">
        <div className="h-5 bg-gray-300 rounded w-1/4"></div>

        <div className="p-4 border rounded-lg space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>

        <div className="p-4 border rounded-lg space-y-2">
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
