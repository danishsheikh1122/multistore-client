import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface Props {
  image: ImageType;
}

const GalleryTab: React.FC<Props> = ({ image }) => {
  return (
    <Tab
      className={
        "relative flex aspect-square items-center justify-center rounded-md bg-white cursor-pointer"
      }
    >
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square overflow-hidden rounded-md inset-0">
            <Image
              fill
              src={image.url}
              alt={""}
              className="object-cover object-center "
            ></Image>
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-offset-2 ring-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
