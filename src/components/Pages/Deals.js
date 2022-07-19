import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import { Box,Button,Card,CardActions,CardContent,CardHeader,CardMedia,IconButton,Link } from '@mui/material'
import { Grid, Typography,Radio } from '@mui/material'



import RadioGroup from '@mui/material/RadioGroup';
import {FormControlLabel} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';




const Deals = () => {
  
  return (
  <>
  <Navbar/>
  <Box className='container-fluid' display={'flex'}>
    <Box className='left-sidebar' width={'25%'} m={'20px'}>
       <Typography variant='h4'>Deals</Typography>
       <Link href='#' underline={'hover'} variant='button' display={'block'}>Deals of the day</Link>
       <Link href='#' underline={'hover'} variant='button' display={'block'}>Flash Sales</Link>
       <Link href='#' underline={'hover'} variant='button' display={'block'}>Most Popular</Link>
       <Typography variant='h4'>Prices</Typography>
       <RadioGroup name='prices'>
  <FormControlLabel value='a' control={<Radio  />} label="Below $25" />
  <FormControlLabel value='b' control={<Radio  />} label="$25-$100" />
  <FormControlLabel value='c' control={<Radio  />} label="$100-$250" />
  <FormControlLabel value='d' control={<Radio  />} label="$250-$1000" />
  <FormControlLabel value='e' control={<Radio  />} label="Above $1000" />
  
</RadioGroup>
    </Box>
    <Box className='main content' width={'75%'} >
       <Grid container spacing={2} sx={{margin:'15px 0 0 0'}} >
        <Grid item xs={4} sx={{backgroundColor:'primary',padding:'15px 15px 15px 15px'}}>
        <Card sx={{ maxWidth: 345 }} raised>
      <CardHeader
     
        title="Real Me "
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/a.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       This is a very nice phone
        </Typography>
      </CardContent>
      <Box display={'flex'} justifyContent={'space-between'}>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
       
      </CardActions>
      <Button size="small">Veiw Details</Button>
      </Box>
    
    </Card>
        </Grid>
        <Grid item xs={4} sx={{backgroundColor:'primary',padding:'15px 15px 15px 15px'}}>
        <Card sx={{ maxWidth: 345 }} raised>
      <CardHeader
     
        title="Real Me "
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/a.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       This is a very nice phone
        </Typography>
      </CardContent>
      <Box display={'flex'} justifyContent={'space-between'}>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
       
      </CardActions>
      <Button size="small">Veiw Details</Button>
      </Box>
    
    </Card>
        </Grid>
        <Grid item xs={4} sx={{backgroundColor:'primary',padding:'15px 15px 15px 15px'}}>
        <Card sx={{ maxWidth: 345 }} raised>
      <CardHeader
     
        title="Real Me "
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/a.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       This is a very nice phone
        </Typography>
      </CardContent>
      <Box display={'flex'} justifyContent={'space-between'}>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
       
      </CardActions>
      <Button size="small">Veiw Details</Button>
      </Box>
    
    </Card>
        </Grid>
        <Grid item xs={4} sx={{backgroundColor:'primary',padding:'15px 15px 15px 15px'}}>
        <Card sx={{ maxWidth: 345 }} raised>
      <CardHeader
     
        title="Real Me "
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/a.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       This is a very nice phone
        </Typography>
      </CardContent>
      <Box display={'flex'} justifyContent={'space-between'}>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
       
      </CardActions>
      <Button size="small">Veiw Details</Button>
      </Box>
    
    </Card>
        </Grid>
        <Grid item xs={4} sx={{backgroundColor:'primary',padding:'15px 15px 15px 15px'}}>
        <Card sx={{ maxWidth: 345 }} raised>
      <CardHeader
     
        title="Real Me "
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/a.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       This is a very nice phone
        </Typography>
      </CardContent>
      <Box display={'flex'} justifyContent={'space-between'}>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
       
      </CardActions>
      <Button size="small">Veiw Details</Button>
      </Box>
    
    </Card>
        </Grid>
       </Grid>
    </Box>

  </Box>
  <Footer/>
  </>
  )
}

export default Deals