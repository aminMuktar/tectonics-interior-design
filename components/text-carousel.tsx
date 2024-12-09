import { type FC } from "react";
import { texts } from "@/constants/texts";
import Image from "next/image";



export const TextCarousel:FC =()=>{
    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {texts.map((text, index) => (
          <li key={index}>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center mb-16">
                    <span className="block text-transparent leading-snug bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-100">
                        {text.service}
                    </span>
                </h2>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {texts.map((text, index) => (
          <li key={index}>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center mb-16">
                    <span className="block text-transparent leading-snug bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-100">
                        {text.service}
                    </span>
                </h2>
          </li>
        ))}
      </ul>
    </div>
    );
}