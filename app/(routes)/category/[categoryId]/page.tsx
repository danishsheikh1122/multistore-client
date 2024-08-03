import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-color";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import BillBoardcmp from "@/components/BillBoard";
import ContainerHomePage from "@/components/ui/containe";
import React from "react";
import Filter from "./components/Filter";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilter from "./components/MobileFilter";

export const revalidate = 0;

interface Props {
  params: { categoryId: string };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const page: React.FC<Props> = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <ContainerHomePage>
        <BillBoardcmp data={[category?.billboard]}></BillBoardcmp>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter sizes={sizes} colors={colors}></MobileFilter>
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes}></Filter>
              <Filter valueKey="colorId" name="Colors" data={colors}></Filter>
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults></NoResults>}
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item}></ProductCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerHomePage>
    </div>
  );
};

export default page;
