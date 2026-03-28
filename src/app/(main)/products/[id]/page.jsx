export const dynamic = "force-dynamic";
import { getProductById } from "@/actions/products.action";
import AddToCart from "@/components/button/AddToCart";
import TestAuth from "@/components/shared/TestAuth";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { id } = await params;

  // fetch data
  const { product } = await getProductById(id);

  return {
    title: product.title,
    description: product.description?.slice(0, 150),
    openGraph: {
      title: product.title,
      description: product.description?.slice(0, 150),
      url: `https://hero-kidz-rose-sigma.vercel.app/products/${id}`,
      siteName: "HeroKidz",
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
      type: "website",
    },
  };
}

export default async function ProductDetails({ params }) {
  // authSession
  const serverSession = await getServerSession(authOptions);

  // params
  const { id } = await params;

  // product
  const { product, qna, info } = await getProductById(id);

  // discount price
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <>
      {/* test authentication session data */}
      {/* <div>
        <TestAuth />
        <p>{JSON.stringify(serverSession)}</p>
      </div> */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={400}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-500">{product.bangla_title}</p>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
            <span className="line-through text-gray-400">৳{product.price}</span>
            <span className="badge badge-error">-{product.discount}%</span>
          </div>

          {/* Rating */}
          <p>
            ⭐ {product.ratings} ({product.reviews} reviews)
          </p>

          {/* Info */}
          <div>
            <h2 className="font-semibold mb-2">Features:</h2>
            <ul className="list-disc ml-5 space-y-1">
              {info.map((item) => (
                <li key={item.id}>{item.info}</li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <AddToCart />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="whitespace-pre-line text-gray-700">
            {product.description}
          </p>
        </div>

        {/* QnA */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Q&A</h2>
          <div className="space-y-3">
            {qna.map((item) => (
              <div key={item.id} className="p-4 border rounded-lg">
                <p className="font-medium">Q: {item.question}</p>
                <p className="text-gray-600">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
