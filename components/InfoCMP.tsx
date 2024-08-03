"use client";
import { Product } from "@/types";
import React from "react";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface Props {
  data: Product;
}

const InfoCMP: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 ">{data?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price}></Currency>
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex gap-y-6 flex-col">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border borde r-gray-600"
            style={{ backgroundColor: `${data?.color?.value}` }}
          ></div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3 ">
        <Button className="flex text-white items-center gap-x-2">
          Add To Cart
          <ShoppingCart></ShoppingCart>
        </Button>
      </div>
    </div>
  );
};

export default InfoCMP;
