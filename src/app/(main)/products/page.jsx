export const dynamic = "force-dynamic";
import { getProducts } from "@/actions/products.action";
import ProductCard from "@/components/card/ProductCard";
import MyTitle from "@/components/shared/MyTitle";
// import products from "@/data/toys.json";

export const metadata = {
  title: "All Products",
  description:
    "Browse all kids toys, learning tools, and fashion items at HeroKidz. Find the best deals with fast delivery.",

  openGraph: {
    title: "All Products | HeroKidz",
    description:
      "Explore fun, safe, and educational toys and kids fashion at HeroKidz.",
    url: "https://hero-kidz-rose-sigma.vercel.app/products",
    siteName: "HeroKidz",
    images: [
      {
        url: "https://hero-kidz-rose-sigma.vercel.app/assets/logo.png", // ✅ MUST be absolute
        width: 1200,
        height: 630,
        alt: "HeroKidz Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "All Products | HeroKidz",
    description:
      "Shop kids toys, fashion, and educational products with great deals.",
    images: [
      "https://hero-kidz-rose-sigma.vercel.app/assets/logo.png", // ✅ same image
    ],
  },
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className="">
      {/* Title */}
      <MyTitle className={"py-5"}>
        All <span className="text-secondary border-b-2">Products</span>
      </MyTitle>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}
