import React from 'react'
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import { Container, Card, Button, Divider, TextField, Typography, Box } from '@mui/material'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material/styles';

import Form from '../Form'

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters>
        <Box sx={{width: '100%', height: 500, backgroundColor:'primary.main'}}>
          <div className='columnFlex p48' style={{paddingTop: 120}}>
            <Typography variant="h1b" color="text.white">Real Estates</Typography>
            <Typography variant="md" color="text.secondaryWhite" maxWidth={300}>Find the house that fit you the best and won't ruin your budget!</Typography>
          </div>
        </Box>

        
        <Box sx={{width: '100%', height: 200, backgroundColor:'none', padding: '72px 0'}}>
          <Typography variant="h3m" color="text.black" padding="48px">Why choose us</Typography>
          <div className='spaceAroundFlex m32'>
            <div className='columnFlex centerFlex'>
              <VillaOutlinedIcon/>
              <Typography variant="lgm" color="text.black" className='p8'>Wide Range</Typography>
              <Typography variant="sm" color="text.secondaryBlack" width='70%' textAlign='center'>From small modest apartments to big luxurious houses. We can find a right fit for everybody!</Typography>
            </div>
            <div className='columnFlex centerFlex'>
              <VillaOutlinedIcon color="text.white" size="xl"/>
              <Typography variant="lgm" color="text.black" className='p8'>Competetive Prices</Typography>
              <Typography variant="sm" color="text.secondaryBlack" width='75%' textAlign='center'>You don’t have to worry about budget! We are sure you will find a home for your pocket.</Typography>
            </div>
            <div className='columnFlex centerFlex'>
              <VillaOutlinedIcon/>
              <Typography variant="lgm" color="text.black" className='p8'>Years of Experience</Typography>
              <Typography variant="sm" color="text.secondaryBlack" width='80%' textAlign='center'>With over 5 years of experience you can be sure that we know what we’re doing!</Typography>
            </div>
          </div>
        </Box>

        <Box sx={{width: '100%', backgroundColor:'primary.main', display: 'flex', justifyContent:'space-around'}}>
          <div className='columnFlex centerFlex m48'>
            <Typography variant="h1m" color="text.white">90</Typography>
            <Typography variant="sm" color="text.secondaryWhite">Houses available</Typography>
          </div>
          
          <div className='columnFlex centerFlex m48'>
            <Typography variant="h1m" color="text.white">250</Typography>
            <Typography variant="sm" color="text.secondaryWhite">Happy Customers</Typography>
          </div>
          
          <div className='columnFlex centerFlex m48'>
            <Typography variant="h1m" color="text.white">25</Typography>
            <Typography variant="sm" color="text.secondaryWhite">Awards Won</Typography>
          </div>
          
          <div className='columnFlex centerFlex m48'>
            <Typography variant="h1m" color="text.white">5+</Typography>
            <Typography variant="sm" color="text.secondaryWhite">Years of experience</Typography>
          </div>
        </Box>

        
        <Box sx={{width: '100%', minHeight: 200, backgroundColor:'none', padding: '32px 0'}}>
        <Typography variant="h3m" color="text.black" padding="48px">Feaetured Properties</Typography>
          <div className='spaceAroundFlex m48'>
            <Card>
              <Typography variant="xlm">Luxury Family House</Typography>
              <VillaOutlinedIcon/> <Typography variant="sm">Woodland Hills, California</Typography>
              <div>
                <div> <VillaOutlinedIcon/> <Typography variant="sm">4 Bedrooms</Typography> </div>
                <div> <VillaOutlinedIcon/> <Typography variant="sm">2 Bathrooms</Typography> </div>
                <div> <VillaOutlinedIcon/> <Typography variant="sm">100 sqft</Typography> </div>
              </div>
              <div>
                <Typography variant="xlm">$11 290 500</Typography>
                <Button variant="contained">View Details</Button>
              </div>
            </Card>

            <Card>
              <Typography variant="xlm">Luxury Family House</Typography>
              <VillaOutlinedIcon/> <Typography variant="sm">Woodland Hills, California</Typography>
              <div >
                <div> <VillaOutlinedIcon/> <Typography variant="sm">4 Bedrooms</Typography> </div>
                <div> <VillaOutlinedIcon/> <Typography variant="sm">2 Bathrooms</Typography> </div>
                <div> <VillaOutlinedIcon/> <Typography variant="sm">100 sqft</Typography> </div>
              </div>
              <div>
                <Typography variant="xlm">$11 290 500</Typography>
                <Button variant="contained">View Details</Button>
              </div>
            </Card>

            <Card>
              <Typography variant="xlm">Luxury Family House</Typography>
              <VillaOutlinedIcon/> <Typography variant="sm">Woodland Hills, California</Typography>
              <div>
                <div> <VillaOutlinedIcon/> <Typography variant="sm">4 Bedrooms</Typography> </div>
                <div> <VillaOutlinedIcon/> <Typography variant="sm">2 Bathrooms</Typography> </div>
                <div> <VillaOutlinedIcon/> <Typography variant="sm">100 sqft</Typography> </div>
              </div>
              <div>
                <Typography variant="xlm">$11 290 500</Typography>
                <Button variant="contained">View Details</Button>
              </div>
            </Card>
          </div>
          <div className='p8 centerFlex'>
          <Button variant="outlined" >View More</Button>
          </div>
          
        </Box>

        <Box sx={{width: '100%', minHeight: 250, backgroundColor:'none', padding: '32px 0'}}>
          <Typography variant="h3m" color="text.black" padding="48px">What our clients says</Typography>
          <div className='spaceAroundFlex m48'>
              <Card className='columnFlex centerFlex p8'>
                <Typography variant="sm_italic" color="text.secondaryBlack" textAlign="center">“This is my first home purchase. I closed a month and a half ago. Terry was very helpful throughout the whole process. What really impressed me is his knowledge of the process.”</Typography>
                <Typography variant="mdm" color="text.black" padding="8px">Lincoln Torff</Typography>  
              </Card>
              <Card className='columnFlex centerFlex p8'>
                <Typography variant="sm_italic" color="text.secondaryBlack" textAlign="center">“Real Estate was simply amazing to work with. They helped my family find our new home in the best neighborhood (within our price range). Their responsiveness made us feel like we were their top priority at all times”</Typography>
                <Typography variant="mdm" color="text.black" padding="8px">Lydia Philips</Typography>
              </Card>
              <Card className='columnFlex centerFlex p8'>
                <Typography variant="sm_italic" color="text.secondaryBlack" textAlign="center">“Made home buying a rather pleasant experience instead of a hellish nightmare it usually is. The whole team is pretty easygoing but still professional. And they're really good.”</Typography>
                <Typography variant="mdm" color="text.black" padding="8px">Madelyn Westervelt</Typography>
              </Card>
          </div>
        </Box>

        <Box sx={{width: '100%', minHeight:200, backgroundColor:'primary.main', display: 'flex', justifyContent:'space-around', padding:"48px 0"}}>
          <Box sx={{width: 400, margin: "0 48px"}}><Form/></Box>
          <div className='columnFlex p8'>
            <Typography variant="sml" color="text.secondaryWhite">GET IN TOUCH</Typography>
            <Typography variant="h2b" color="text.white">Contact with Us!</Typography>
            <Typography variant="xs" color="text.secondaryWhite">If you need a consultation, leave your details and we will call you back as soon as we can! You may also find us here:</Typography>
            <div>
              <VillaOutlinedIcon/>
              <VillaOutlinedIcon/>
              <VillaOutlinedIcon/>
            </div>
            <Divider/>
            <div>
              <div><VillaOutlinedIcon/> <Typography variant="md" color="text.white">contact@realestates.com</Typography></div>
              <div><VillaOutlinedIcon/> <Typography variant="md" color="text.white">+00 123 456 789</Typography></div>
              <div><VillaOutlinedIcon/> <Typography variant="md" color="text.white">(215) 752-0615 334 Sunset Ave Langhorne, Pennsylvania(PA), 19047</Typography>
    </div>
            </div>
          </div>
        </Box>

      </Container>
    </ThemeProvider>
  )
}

export default Home