import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box className="container">
        <Box className="contact-info m-5 p-5 " display={'flex'} boxShadow={'3'}>
          <Box className="address"  width={'40%'}>
            <Typography variant="h4">
            Our Store
            </Typography>
            <Typography variant="h4">
           Jamal,Kathmandu
            </Typography>
            <Typography variant="h4">
            01-4354654
            </Typography>
            <Typography variant="h4">
            www.ourstore.com
            </Typography>
            </Box>
          <Box className="contact-form"  width={'60%'}  paddingX={5} borderLeft={1}>
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth className="mb-3" />
          <TextField id="outlined-basic" label="Email" variant="outlined"fullWidth className="mb-3" />
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth multiline rows={'5'} className="mb-3"/>
          <Button color='info' fullWidth variant='contained'>SEND MESSAGE</Button>
          </Box>
        </Box>
  
       
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
