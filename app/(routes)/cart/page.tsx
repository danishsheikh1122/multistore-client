"use client";
import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";
import ContainerHomePage from "@/components/ui/containe";
import useCartModal from "@/hooks/use-cart-modal copy";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const cart = useCartModal();

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <ContainerHomePage>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No items added to cart</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item}></CartItem>
                ))}
              </ul>
            </div>
            <Summary></Summary>
          </div>
        </div>
      </ContainerHomePage>
    </div>
  );
};

export default CartPage;
