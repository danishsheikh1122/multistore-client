import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import GalleryCMP from "@/components/GalleryCMP";
import InfoCMP from "@/components/InfoCMP";
import ProductList from "@/components/ProductList";
import ContainerHomePage from "@/components/ui/containe";
import React from "react";

interface Props {
  params: { productId: string };
}

const ProductPage: React.FC<Props> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <ContainerHomePage>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:item-start lg:gap-x-8">
            <GalleryCMP images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <InfoCMP data={product}></InfoCMP>
            </div>
          </div>
          <hr className="my-10" />
          <ProductList items={suggestedProducts} title={"Related Items"} />
        </div>
      </ContainerHomePage>
    </div>
  );
};

export default ProductPage;
