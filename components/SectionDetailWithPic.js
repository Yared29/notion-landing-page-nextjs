import React from "react";
import Image from "next/image";

const SectionDetailWithPic = ({
  imageUrl,
  iconUrl,
  title,
  detail,
  iconHeight,
  iconWidth,
  detail2 = "",
}) => (
  <div className="flex items-center pb-10 space-x-5">
    <div className="w-auto pr-4 hidden md:block">
      <Image src={imageUrl} alt={imageUrl} width="700" height="450" />
    </div>
    <div className="md:w-4/12">
      <div className="flex sm:flex-row md:flex-col  ">
        <div className="pb-2 sm:px-0 px-2">
          <Image
            src={iconUrl}
            alt={iconUrl}
            height={iconHeight}
            width={iconWidth}
          />
        </div>
        <div className="text-black font-bold text-xl">{title}</div>
      </div>
      <div className="text-black text-sm">{detail}</div>
      {detail2 != "" ? (
        <div className="text-black text-sm pt-2">{detail2}</div>
      ) : (
        <></>
      )}
    </div>
  </div>
);

export default SectionDetailWithPic;
