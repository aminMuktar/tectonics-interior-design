import { Box, Container, Typography } from "@mui/material";
import type { FC } from "react";



export const HomeHero: FC = (props)=>{
    return (
        <Box
            sx={{
                pt: 6,
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url("/hero.jpg")',
                backgroundSize: "cover",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            
        >
        <Container
        maxWidth="md"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        
        <h1 className="col-start-1 font-bold row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-7xl xl:max-w-[43.5rem]">
            <span className="block text-transparent leading-snug bg-clip-text bg-gradient-to-r from-gray-200 via-slate-200 to-slate-100">
              Crafting Spaces, Designing Dreams 
            </span>
        </h1>
        {/* <TextRevealCardPreview /> */}
        <div className="rounded bg-black opacity-70">
            <p className="py-3 px-6 text-center font-bold text-white">
              we believe in creating exceptional spaces that inspire &amp; reflect your unique style. 
              With years of expertise in architectural design &amp; a passion for innovation, 
              we transform ideas into reality.
            </p>
        </div>
        
        
      </Container>
      </Box>
    );
}