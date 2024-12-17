import { Box } from "@mui/material";
import type { FC } from "react";

export const InteriorDesign: FC = (props) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
      }}
      className=""
    >
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto order-2 lg:order-1">
          <img
            className="h-full w-full rounded-md object-cover"
            src="/classical-arch.jpg"
            alt="Winding mountain road"
          />
        </div>

        <div
          className="max-w-lg bg-gray-950 rounded-lg md:max-w-2xl md:shadow-2xl lg:w-3/5 lg:left-0 order-1 lg:order-2 relative lg:absolute lg:ml-20 xl:ml-12"
        >
          <div className="flex flex-col p-12 md:px-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              <span className="">Classical</span> Architecture
            </h1>
            <div className="w-20 h-2 bg-white my-4"></div>
            <p className="text-xl text-gray-500 mt-4">
            Experience timeless elegance with designs inspired by historical grandeur, symmetry, and classical elements.
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};
