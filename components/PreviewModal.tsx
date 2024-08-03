"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import React from "react";
import Modal from "./ui/Modal";
import GalleryCMP from "./GalleryCMP";
import InfoCMP from "./InfoCMP";
const PreviewModal = () => {
  const previewmodal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <Modal open={previewmodal.isOpen} onClose={previewmodal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <GalleryCMP images={product.images}></GalleryCMP>
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <InfoCMP data={product}></InfoCMP>
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
