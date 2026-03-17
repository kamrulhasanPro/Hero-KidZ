import MyTitle from "@/components/shared/MyTitle";
import React from "react";
import products from "@/data/toys.json";
import ProductCard from "@/components/card/ProductCard";

const Products = () => {
  return (
    <section className="py-10">
      {/* Title */}
      <MyTitle>
        Our <span className="text-secondary border-b-2">Products</span>
      </MyTitle>

      {/* Products */}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, i) => (
          <ProductCard key={i} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default Products;
