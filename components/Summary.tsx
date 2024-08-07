import React, { useEffect } from "react";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import useCartModal from "@/hooks/use-cart-modal copy";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCartModal((state) => state.items);
  const removeAll = useCartModal((state) => state.removeAll);

  const totalPrice = items.reduce(
    (totalPrice, item) => totalPrice + Number(item.price),
    0
  );

  useEffect(() => {
    if (searchParams.get("success")) toast.success("Payment successful");
    if (searchParams.get("cancled")) toast.error("Payment failed");
  }, [searchParams, removeAll]);

  const onCheckOut = async () => {
    toast.success("This functionality is not available right now :<");
  };

  return (
    <div className=" mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:py-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice}></Currency>
        </div>
      </div>
      <Button className="w-full mt-6 text-white" onClick={onCheckOut}>
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
