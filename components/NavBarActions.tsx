"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { ShoppingBag } from "lucide-react";
import { tree } from "next/dist/build/templates/app-page";
import useCartModal from "@/hooks/use-cart-modal copy";
import { useRouter } from "next/navigation";

const NavBarActions = () => {
  //preventing hydration errors by below trick
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCartModal();
  const router=useRouter()

  if (!isMounted) return null;
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="bg-black px-4 py-2 flex items-center rounded-full" onClick={()=>router.push('/cart')}>
        <ShoppingBag size={20} color="white"></ShoppingBag>{" "}
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavBarActions;
