import { Box, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center",bgcolor:"#1A1A19", color:"white", p:3}}>
    <Box sx={{my:3, "& svg":{
        fontSize:"50px",
        cursor:"pointer",
        mr:2,
    },
    "& svg:hover":{
        color:"goldenrod",
        transform:"translateX(5px)",
        transition:"all 400ms"
    }
    }}>
    <InstagramIcon/>
    <TwitterIcon/>
    <GitHubIcon/>
    <LinkedInIcon/>
    <YouTubeIcon/>
    </Box>
        <Typography variant="h5" sx={{"@media(max-width:600px)":{
            fontSize:"1rem",
        },
        }}>
            All Rights Reserved &copy; Bibek's Development
        </Typography>
    </Box>
    </>
  )
}

export default Footer
