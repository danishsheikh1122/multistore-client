import React from "react";
import ContainerHomePage from "./ui/containe";
import Link from "next/link";
import MainNavForHome from "./MainNav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "./NavBarActions";

export const revalidate = 5;

const NavBar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <ContainerHomePage>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 felx lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNavForHome data={categories} />
          <NavBarActions />
        </div>
      </ContainerHomePage>
    </div>
  );
};

export default NavBar;
