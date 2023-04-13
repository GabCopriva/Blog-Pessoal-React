import React from 'react';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import { blue } from '@material-ui/core/colors';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='bg-menu'>
                <Grid alignItems="center" item xs={12}>
                    <Box className='box'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Siga nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/gabcopriva/" target="_blank">
                                <InstagramIcon style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com//in/gabrielcopriva/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 50, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box'>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright</Typography>
                        </Box>
                        
                    
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;