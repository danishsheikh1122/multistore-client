"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { ShoppingBag } from "lucide-react";
import { tree } from "next/dist/build/templates/app-page";

const NavBarActions = () => {
  //preventing hydration errors by below trick 
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if(!isMounted) return null
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="bg-black px-4 py-2 flex items-center rounded-full">
        <ShoppingBag size={20} color="white"></ShoppingBag>{" "}
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavBarActions;
