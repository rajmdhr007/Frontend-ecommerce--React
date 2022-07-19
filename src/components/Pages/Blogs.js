import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Blogs = () => {
  return (
    <>
    <Navbar/>
    <Box className='BlogContainer' backgroundColor='primary.main' padding={3} >
        <Box className='Blog' display={'flex'}>
            <Box className='Blog-Content' width={'70%'}>
<Box className='Blog-Title'>
    <Typography variant='h4'>
Title
</Typography>
</Box>
<Box className='Blog-Text'>
    <Typography variant='body1'>This is a blog text</Typography>
    
    </Box>

            </Box>
            <Box className='Blog-Author' width={'20%'}>
<Box className='Blogger-image' width={'100%'} borderRadius={'50%'} overflow={'hidden'} backgroundColor={'info.main'}>
    <img src='./images/a.jpg' width={'100%'} alt=''/>
</Box>
<Box className='Blogger-name' textAlign={'right'}><h4>Blogger</h4></Box>
            </Box>
        </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default Blogs