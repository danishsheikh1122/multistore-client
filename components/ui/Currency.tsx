'use client'
import { formatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface Props {
  value?: number | string;
}
const Currency: React.FC<Props> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
