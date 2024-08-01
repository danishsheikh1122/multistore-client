import { Product } from "@/types";
import React from "react";
import NoResults from "./ui/NoResults";
import ProductCard from "./ui/ProductCard";

interface Props {
  title: string;
  items: Product[];
}

const ProductList: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults></NoResults>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((items) => (
          <ProductCard key={items.id} data={items}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
