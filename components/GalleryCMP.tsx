"use client";
import React from "react";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import { fetchInternalImage } from "next/dist/server/image-optimizer";
import GalleryTab from "./GalleryTab";
import Image from "next/image";

interface Props {
  images: ImageType[];
}

const GalleryCMP: React.FC<Props> = ({ images }) => {
//   console.log("images",images);

  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel
            key={image.id}
            className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden"
          >
            <Image
              fill
              src={image.url}
              alt="image"
              className="object-cover object-center"
            ></Image>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default GalleryCMP;