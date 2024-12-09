import { FC } from "react";
import { TextCarousel } from "./text-carousel";




export const TextDivider:FC = () =>{
    return(
        <>
            <div className="py-[72px] sm:py-12 bg-black">
                <div className="container">
                    <TextCarousel />
                </div>
            </div>
        </>
    );
}