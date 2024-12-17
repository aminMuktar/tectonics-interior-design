"use client"
import { Box, CircularProgress, Container, Grid2, Typography } from "@mui/material";
import type { FC } from "react";
import Image from 'next/image'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import { data } from "@/constants/landscape";



interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))
export const LandscapeDesign: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'black' }}>
      <Container>
        <Grid2 container spacing={6}>
          <Grid2 size={{ xs:12, md:5 }}>
            <Box sx={{ position: 'relative' }}>
                <Image src="/minimal-arch.jpg" className="rounded-lg" width={650} height={678} quality={97} alt="Feature img" />
              <Box
                sx={{
                  position: 'absolute',
                  top: -36,
                  right: { xs: 0, md: -36 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 1.4,
                  zIndex: 1,
                  backgroundColor: "#030712",
                  width: 190,
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ color: "white" }}>
                    Design
                  </Typography>
                  <BorderLinearProgress
                    sx={{
                      backgroundColor: 'black',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#64748B'
                      }
                    }}
                    variant="determinate"
                    value={65} order={1} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ color: "white" }}>
                    Development
                  </Typography>
                  <BorderLinearProgress
                    sx={{
                      backgroundColor: 'black',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#64748B'
                      }
                    }}
                    variant="determinate"
                    value={40} order={2} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ color: "white" }}>
                    Consult
                  </Typography>
                  <BorderLinearProgress
                    sx={{
                      backgroundColor: 'black',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#64748B'
                      }
                    }}
                    variant="determinate" 
                    value={90} order={3} />
                </Box>
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: -12,
                  left: { xs: 0, md: -24 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 2,
                  zIndex: 1,
                  backgroundColor: '#030712',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography sx={{ fontWeight: 600, lineHeight: 1, color: "white" }}>Customer success</Typography>
                  <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.disabled' }}>
                  </Typography>
                  <Box
                    sx={{
                      height: 85,
                      width: 85,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography variant="h5" sx={{ color: 'white' }}>
                      75%
                    </Typography>
                    <CircularProgress
                      sx={{ 
                        position: 'absolute',
                        color: 'white',                        
                      }}
                      thickness={4}
                      variant="determinate"
                      value={85}
                      size={85}
                    />
                    <CircularProgress
                      disableShrink
                      thickness={4}
                      variant="determinate"
                      value={75}
                      size={85}
                      sx={{ transform: 'rotate(96deg) !important', color: '#64748B', position: 'absolute' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <h1 className="text-4xl lg:text-6xl text-white font-bold"><span>Minimal </span>architecture</h1>
            <p className="px-6 text-xl text-gray-500 mb-10">
            Find beauty in simplicity with clutter-free spaces and a focus on essential elements that evoke tranquility and purpose.
            </p>
              

            <Grid2 container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
              {data.map(({ title, description, icon }, index) => (
                <Grid2 key={String(index)} size={{ xs:12, md:6 }}>
                  <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                    
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
