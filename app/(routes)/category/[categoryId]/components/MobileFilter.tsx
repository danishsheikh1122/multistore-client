"use client";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Color, Sizes } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import Filter from "./Filter";

interface Props {
  sizes: Sizes[];
  colors: Color[];
}

const MobileFilter: React.FC<Props> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button
        className="flex items-center gap-x-2 lg:hidden text-white"
        onClick={onOpen}
      >
        Filters
        <Plus size={20}></Plus>
      </Button>
      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className={"relative z-40 lg:hidden"}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className={
              "relative  bg-white bg-opacity ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto  py-4 pb-6 shadow-xl"
            }
          >
            <div className="flex items-center justify-end px-4">
              <IconButton
                icon={<X size={15}></X>}
                onClick={onClose}
              ></IconButton>
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes}></Filter>
              <Filter valueKey="colorId" name="Colors" data={colors}></Filter>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
