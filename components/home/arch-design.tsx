import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import type { FC } from "react";
import NextLink from 'next/link';



export const HomeService: FC = (props)=>{
    return (
        <Box
            sx={{
                
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            
        >
            <div className="flex flex-wrap">
                <div className="w-full sm:w-8/12 mb-10">
                <div className="container mx-auto h-full sm:p-10">
                    
                    <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                    <div className="w-full">
                        <h1 className="text-4xl lg:text-6xl font-bold"><span>Modern </span>architecture</h1>
                        <div className="w-20 h-2 bg-black my-4"></div>
                        <p className="text-xl text-gray-800 mb-10">Embrace simplicity and functionality with clean lines, open spaces, and innovative materials. Perfect for those who value sleek and contemporary aesthetics.</p>
                    </div>
                    </header>
                </div>
                </div>
                <img src="modern-arch.jpg" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
            </div>
      </Box>
    );
}