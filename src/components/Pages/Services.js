import React from 'react'
import Navbar from '../layout/Navbar'
import {  Grid, Typography } from '@mui/material'
import Footer from '../layout/Footer'
import { Box } from '@mui/system'

const Services = () => {
  return (
    <>
<Navbar/>
<Grid container spacing={4} sx={{padding:3}}>
    <Grid item xs={4}>
<Box display={'flex'} justifyContent={'space-evenly'} sx={{border:3,borderRadius:3,borderColor:'grey',padding:3}}>
    <img src='./images/a.jpg'alt='mobile' height={'50px'}/>
<div>
    <Typography variant='h6'>Octopus Display</Typography>
    <Typography variant='body2'>HEY THERE HOW ARE YOU</Typography>
</div>
</Box>
    </Grid>
    <Grid item xs={4}>
    <Box display={'flex'} justifyContent={'space-evenly'} sx={{border:3,borderRadius:3,borderColor:'grey',padding:3}}>
    <img src='./images/a.jpg'alt='mobile' height={'50px'}/>
<div>
    <Typography variant='h6'>Octopus Display</Typography>
    <Typography variant='body2'>HEY THERE HOW ARE YOU</Typography>
</div>
</Box>
        </Grid>
        <Grid item xs={4}>
        <Box display={'flex'} justifyContent={'space-evenly'} sx={{border:3,borderRadius:3,borderColor:'grey',padding:3}}>
    <img src='./images/a.jpg'alt='mobile' height={'50px'}/>
<div>
    <Typography variant='h6'>Octopus Display</Typography>
    <Typography variant='body2'>HEY THERE HOW ARE YOU</Typography>
</div>
</Box>
        </Grid>
</Grid>
<Footer/>



    </>
  )
}

export default Services