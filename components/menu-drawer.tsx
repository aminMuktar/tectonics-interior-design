
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import type { FC } from 'react';
import { Close } from '@mui/icons-material';


interface MenuDrawerProps{
    onClose?: () => void;
    open?: boolean;
}



export const MenuDrawer: FC<MenuDrawerProps> = (props) =>{
    const { open, onClose }=props;
    return (
        <Drawer
            anchor='right'
            onClose={onClose}
            open={open}
            ModalProps={{ sx: {zIndex: 2000 }}}
            PaperProps={{ sx: { width: "100%", backgroundColor: "black" }}}
            transitionDuration={{ enter: 500, exit: 1000 }}
        >
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 3,
                    py: 2,
                    maxHeight: 120
                }}
            >
                    <Box>
                        <img alt="" src="/logo.svg" className="h-48 w-32 rounded-full" />  
                    </Box>
                <IconButton
                color="inherit"
                onClick={onClose}
                >
                    <Close fontSize="large" sx={{ color: "white" }}/>
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                    
                  }}
            >
                    <a href="/" className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-7xl xl:max-w-[43.5rem]">
                        <span className="block text-transparent leading-snug bg-clip-text bg-gradient-to-r from-slate-500 via-slate-500 to-slate-100 duration-500 hover:text-gray-700 hover:underline">
                            Home
                        </span>
                    </a>
                    <a href="/services" className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-7xl xl:max-w-[43.5rem]">
                        <span className="block text-transparent leading-snug bg-clip-text bg-gradient-to-r from-slate-500 via-slate-500 to-slate-100 duration-500 hover:text-gray-700 hover:underline">
                            Services
                        </span>
                    </a>
                    <a href="/contact" className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-7xl xl:max-w-[43.5rem]">
                        <span className="block text-transparent leading-snug bg-clip-text bg-gradient-to-r from-slate-500 via-slate-500 to-slate-100 duration-500 hover:text-gray-700 hover:underline">
                            Contact
                        </span>
                    </a>
            </Box>
        </Drawer>
    );
}