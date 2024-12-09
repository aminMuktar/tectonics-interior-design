"use client"
import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";


export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Services() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/architectural-design.jpg",
    location: "Architectural Design",
    description:
      "From initial concepts to detailed blueprints, we create designs tailored to your vision and functional requirements.",
    title: "Architectural Design",
  },
  {
    img: "/interior-design.jpg",
    title: "Interior Design",
    description:
      "Transform interiors into stunning, harmonious spaces that reflect your personality and style.",
    location: "",
  },
  {
    img: "/landscape-design.jpg",
    title: "Landscape Design",
    description:
      "Integrate natural beauty into your surroundings with thoughtfully planned outdoor spaces.",
    location: "",
  },
  {
    img: "/furniture-design.jpg",
    title: "Furniture Design",
    description:
      "Enhance your space with custom-designed furniture that complements your aesthetic and meets your needs.",
    location: "",
  },
  {
    img: "/building-finishing.jpg",
    title: "Building Finishing Works",
    description:
      "We ensure your project is completed with impeccable attention to detail, delivering flawless finishes.",
    location: "",
  },
  {
    img: "/woodwork.jpg",
    title: "Wood Works",
    description:
      "Craft exquisite woodwork, including cabinetry, paneling, and bespoke furniture, to elevate your space.",
    location: "",
  },
];

const initData = sliderData[0];
