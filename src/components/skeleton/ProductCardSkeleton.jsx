// ------------------ Skeleton ------------------
export default function ProductCardSkeleton() {
  return (
    <div className="card w-80 bg-base-100 shadow-xl animate-pulse">
      <div className="h-48 bg-gray-300 rounded-t-xl"></div>

      <div className="card-body space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>

        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
        </div>

        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
