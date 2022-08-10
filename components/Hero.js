import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-between pt-10">
      <div className="max-w-lg">
        <div className="text-5xl font-bold text-black">
          <div> One workspace.</div>
          <div>Every team.</div>
        </div>
        <div className="pt-4 text-md font-bold text-gray-600">
          We`re more than a doc. Or a table. Customize Notion to work the way
          you do.
        </div>
        <div className="max-w-fit mt-4 rounded font-semibold border-x border-gray-300 cursor-pointer bg-red-500 text-gray-200  p-2 text-xs hover:bg-red-600 ">
          Try Notion free
        </div>
        <div className="pt-4 text-gray-500 text-sm">Trusted by teams at</div>
        <div className="flex space-x-4 pt-1 grayscale">
          <div>
            <Image src="/mixpanel.png" alt="mixpanel" height="17" width="45" />
          </div>
          <div>
            <Image src="/match.png" alt="match" height="18" width="113" />
          </div>
          <div>
            <Image src="/curology.png" alt="curology" height="16" width="80" />
          </div>
          <div>
            <Image
              src="/headspace.png"
              alt="headspace"
              height="21"
              width="95"
            />
          </div>
        </div>
      </div>
      <div className="max-w-md">
        <Image src="/home-page-hero.png" alt="hero" height="324" width="480" />
      </div>
    </div>
  );
};

export default Hero;
