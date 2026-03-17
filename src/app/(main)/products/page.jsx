import { getProducts } from "@/actions/products.action";
import ProductCard from "@/components/card/ProductCard";
import MyTitle from "@/components/shared/MyTitle";
// import products from "@/data/toys.json";

export default async function ProductsPage() {

  const products =await getProducts()
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
