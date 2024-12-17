"use client"
import { useEffect, useState, type FC } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { MenuDrawer } from "./menu-drawer";



export const Navbar:FC = () =>{
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [open,setOpen] = useState<boolean>(false);

    const handleOpen = ():void =>{
        setOpen(true)
    }
    const handleClose = ():void =>{
        setOpen(false)
    }
    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY>100){
                setIsSticky(true)
            }
            else{
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.addEventListener('scroll', handleScroll);
        }
    })
    return (
        <>
            
            <header className="fixed top-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg ">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6">
            <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src="/logo.svg" className="h-10 w-10 rounded-full" />
                </a>
            </div>
            <p className="hidden text-white font-bold text-lg lg:flex lg:gap-x-12">
                Tectonics Architecture and Interior Design
            </p>
            <div className="lg:flex lg:flex-1 lg:justify-end"> 
                <button
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center text-background gap-2 hover:bg-black text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5"
                    onClick={handleOpen}
                >
                    <MenuIcon fontSize="large" sx={{ color: "white" }}/>
                </button>
                
            </div>
            </nav>
      </header>
            <MenuDrawer
                onClose={handleClose}
                open={open}
            />
        </>
    );
}