"use client"
import { Fab, Tooltip } from "@mui/material";
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { MenuDrawer } from "./menu-drawer";


export const MenuButton = () =>{
    const [open,setOpen] = useState<boolean>(false);

    const handleOpen = ():void =>{
        setOpen(true)
    }
    const handleClose = ():void =>{
        setOpen(false)
    }


    return (
        <>
            <Tooltip title="Menu">
                <Fab 
                    // color="success"
                    variant="extended"
                    onClick={handleOpen}
                    sx={{
                        bottom: 0,
                        margin: (theme) => theme.spacing(4),
                        position: 'fixed',
                        right: 0,
                        zIndex: 1900,
                        boxShadow: 'none', 
                        border: '0.1px solid black',
                        '&:hover': { boxShadow: 'none' }
                    }}
                >
                    <MenuIcon fontSize="small" sx={{ mr:1 }}/>
                    Menu
                </Fab>
            </Tooltip>
            <MenuDrawer
                onClose={handleClose}
                open={open}
            />
        </>
    );
}