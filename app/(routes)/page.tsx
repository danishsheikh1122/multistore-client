/* trunk-ignore-all(prettier) */
import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import BillBoardcmp from "@/components/BillBoard";
import ProductList from "@/components/ProductList";
import ContainerHomePage from "@/components/ui/containe";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillboards(
    "070cf4d3-f1f4-4bac-a558-61f75ffdbe8a"
  );
  const products = await getProducts({ isFeatured: true });
  return (
    <ContainerHomePage>
      <div className="space-y-10 pv-10">
        <BillBoardcmp data={billboards} />
      </div>
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
        <ProductList items={products} title={"Featured Products"}></ProductList>
      </div>
    </ContainerHomePage>
  );
};

export default HomePage;
