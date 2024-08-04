"use client";
import { Product } from "@/types";
import React, { MouseEventHandler } from "react";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCartModal from "@/hooks/use-cart-modal copy";
interface Props {
  data: Product;
}

const ProductCard: React.FC<Props> = ({ data }) => {
  const PreviewModal = usePreviewModal();
  const cart = useCartModal();
  const router = useRouter();
  const handelOnClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreivew: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    PreviewModal.onOpen(data);
  };
  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handelOnClick}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="image"
          className="aspect-square object-cover rounded-md"
        ></Image>
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreivew}
              icon={<Expand size={20} className="text-gray-600"></Expand>}
            />
            <IconButton
              onClick={onAddtoCart}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-gray-600"
                ></ShoppingCart>
              }
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price}></Currency>
      </div>
    </div>
  );
};
export default ProductCard;
