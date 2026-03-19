// "use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

// ------------------ Product Card ------------------
export default function ProductCard({ product }) {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transition">
      <figure className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="object-cover w-full max-h-48"
        />

        {product.discount > 0 && (
          <span className="absolute top-0 left-0 badge badge-success rounded-l-none rounded-tr-none text-white">
            -{product.discount}%
          </span>
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title text-base font-bold">{product.title}</h2>

        {/* <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p> */}

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span className="text-sm text-gray-700">
            {product.ratings} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {product.discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ৳{product.price}
            </span>
          )}
        </div>

        {/* Button */}
        <div className="card-actions ">
          <Link
            href={`/products/${product.id}`}
            className="btn btn-primary btn-sm flex-1"
          >
            View Details
          </Link>
          <button className="btn btn-primary btn-outline btn-sm flex-1">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// ------------------ Usage Example ------------------
// import ProductCard, { ProductCardSkeleton } from "./ProductCard";

// const product = {...};

// export default function Page() {
//   const loading = false;

//   return (
//     <div className="p-6">
//       {loading ? (
//         <ProductCardSkeleton />
//       ) : (
//         <ProductCard product={product} />
//       )}
//     </div>
//   );
// }
