import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';



const useStyles = makeStyles({
    image: {
        marginTop: 67,
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #0000`,
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child':{
            fontSize: '4rem',
            color:'#FFFFFF',
            lineHeight: 1
        },
        '& :last-child':{
            fontSize: '2rem',
            color:'#FFFFFF'
        },
    },
});



export const Banner = () => {
    const classes = useStyles();
  return (
    <Box className = {classes.image}>
        <Typography>BLOG</Typography>
        <Typography>ICode-Guru Blogs</Typography>
    </Box>
  );
};
