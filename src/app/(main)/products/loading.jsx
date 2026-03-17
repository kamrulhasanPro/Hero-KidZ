import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default loading;
