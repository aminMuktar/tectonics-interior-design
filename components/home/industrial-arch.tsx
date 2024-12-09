import { Box, Container, Typography } from "@mui/material";
import type { FC } from "react";



export const IndustrialArch: FC = ()=>{
    return (
        <>
        <section className="lg:pt-20 pt-0 lg:pl-8 h-full">
            <div
            className="rounded-2xl bg-gray-50 py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
                <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
                    <div className="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
                    <span className="bg-black py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">#1</span>
                    Leading interior design company in ethiopia
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        Industrial Architecture
                    </h1>
                    <p className=" text-gray-500 text-lg text-center lg:text-left">
                    Showcase raw materials and structural elements for a bold, edgy aesthetic inspired by warehouses and factories.
                    </p>
                    {/* <div
                    className="relative p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-transparent md:bg-white transition-all duration-500 hover:border-indigo-600 focus-within:border-indigo-600"> */}
                    {/* <input type="text" name="email" placeholder="Enter email to get started"
                        className="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full" /> */}
                    <div className="py-8">
                    <a
                    href="/contact"
                        className="bg-black rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-gray-700 cursor-pointer transition-all duration-500 md:w-fit w-full">
                            Contact us
                        </a>
                    </div>
                    {/* </div> */}
                    <div className="flex items-center flex-col lg:flex-row">
                    {/* <div className="flex items-center">
                        <img src="https://pagedone.io/asset/uploads/1694846673.png" alt="Rounded image "
                        className="border-2 border-solid border-indigo-50 rounded-full relative z-50 object-cover" />
                        <img src="https://pagedone.io/asset/uploads/1694846691.png" alt="Rounded image"
                        className="border-2 border-solid border-indigo-50 rounded-full relative z-30 -ml-3 object-cover" />
                        <img src="https://pagedone.io/asset/uploads/1694846704.png" alt="Rounded image"
                        className="border-2 border-solid border-indigo-50 rounded-full relative z-20 -ml-3 object-cover" />
                    </div> */}
                    {/* <span className="mt-3 text-base text-gray-600 font-medium lg:ml-3">People have joined</span> */}
                    </div>
                </div>
                <div className="w-full xl:col-span-7  lg:col-span-6 block">
                    <div className="w-full  sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                    <img src="/industrial-arch.jpg" alt="Dashboard image" className="rounded-l-3xl object-cover w-full  lg:h-auto " />
                    </div>
                </div>
                </div>
            </div>
            </div>
  </section>
        </>
    );
}