import { Billboard } from "@/types";
import React from "react";

interface Props {
  data: Billboard[];
}

const BillBoardcmp: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data[0]?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data[0]?.label}
          </div>
        </div>
      </div>
    </div> 
  );
};

export default BillBoardcmp;
