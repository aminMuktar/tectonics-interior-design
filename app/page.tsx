import { HomeHero } from "@/components/home/hero";
import { HomeService } from "@/components/home/arch-design";
import { Box } from "@mui/material";
import Image from "next/image";
import { InteriorDesign } from "@/components/home/interior-design";
import { LandscapeDesign } from "@/components/home/landscape-design";
import { TextDivider } from "@/components/text-divider";
import { ContemporaryArch } from "@/components/home/contemporary-arch";
import { IndustrialArch } from "@/components/home/industrial-arch";
import { Wabisabi } from "@/components/home/wabisabi";
// import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
    <div className="">
      <HomeHero />
      <TextDivider />
      <HomeService />
      <InteriorDesign />
      <TextDivider />
      <LandscapeDesign />
      <ContemporaryArch />
      <Wabisabi />
      <IndustrialArch />
      </div>
    </>
  );
}
