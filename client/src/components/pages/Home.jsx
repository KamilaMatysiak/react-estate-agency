import React from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Container, Button, Divider, Typography, Box } from '@mui/material'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material/styles';

import Form from '../Form'
import SearchForm from '../SearchForm';
import wave from '../../data/images/wave.svg'
import image from '../../data/images/banner.svg'
import range from '../../data/images/Real Estate.svg'
import price from '../../data/images/Price Tag.svg'
import exp from '../../data/images/Certificate.svg'
import RatingCard from '../RatingCard';
import EstateCard from '../EstateCard';


const Home = () => {
  let temp = {
    name: "Luxury house",
    price: 2000000,
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters>
      <div className="bannerBackground">
        <img className='wave' alt='banner' src={wave}/>
        <img className="building" alt='building' src={image}/>
      </div>
        <div className='searchForm'>
          <SearchForm/>
        </div>
        <Box sx={{width: '100%', height: 700, marginBottom: 16, backgroundColor: "primary.main", zIndex: 2}}>
          <div className='columnFlex p48 maxWidthLg' style={{paddingTop: 300}}>
            <Typography variant="display" marginBottom={4} color="text.white">Real Estates</Typography>
            <Typography variant="lg" color="text.secondaryWhite" maxWidth={350}>Find the house that fit you the best and won't ruin your budget!</Typography>
          </div>
        </Box>

        
        
        <Box sx={{width: '100%', minHeight: 200, padding: '72px 0'}}>
          <div className='p48 maxWidthLg'>
          <Typography variant="h2m" color="text.black" >Why choose us</Typography>
          </div>
          <div className='spaceAroundFlex m32 maxWidthLg'>
            <div className='columnFlex centerFlex'>
              <img src={range} alt="Range Icon"/>
              <Typography variant="xlm" color="text.black" className='p8'>Wide Range</Typography>
              <Typography variant="sm" color="text.secondaryBlack" width='70%' textAlign='center'>From small modest apartments to big luxurious houses. We can find a right fit for everybody!</Typography>
            </div>
            <div className='columnFlex centerFlex'>
            <img src={price} alt="Price Tag Icon"/>
              <Typography variant="xlm" color="text.black" className='p8'>Competetive Prices</Typography>
              <Typography variant="sm" color="text.secondaryBlack" width='75%' textAlign='center'>You don’t have to worry about budget! We are sure you will find a home for your pocket.</Typography>
            </div>
            <div className='columnFlex centerFlex'>
            <img src={exp} alt="Certificate Icon"/>
              <Typography variant="xlm" color="text.black" className='p8'>Years of Experience</Typography>
              <Typography variant="sm" color="text.secondaryBlack" width='80%' textAlign='center'>With over 5 years of experience you can be sure that we know what we’re doing!</Typography>
            </div>
          </div>
        </Box>

        <Box sx={{width: '100%', backgroundColor:'primary.main', padding: "32px 0"}}>
          <div className='maxWidthLg spaceAroundFlex'>
            <div className='columnFlex centerFlex m48 '>
              <Typography variant="h1m" color="text.white">90+</Typography>
              <Typography variant="sm" color="text.secondaryWhite">Houses available</Typography>
            </div>
            
            <div className='columnFlex centerFlex m48'>
              <Typography variant="h1m" color="text.white">250+</Typography>
              <Typography variant="sm" color="text.secondaryWhite">Happy Customers</Typography>
            </div>
            
            <div className='columnFlex centerFlex m48'>
              <Typography variant="h1m" color="text.white">25+</Typography>
              <Typography variant="sm" color="text.secondaryWhite">Awards Won</Typography>
            </div>
            
            <div className='columnFlex centerFlex m48'>
              <Typography variant="h1m" color="text.white">5+</Typography>
              <Typography variant="sm" color="text.secondaryWhite">Years of experience</Typography>
            </div>
          </div>
        </Box>

        
        <Box sx={{width: '100%', minHeight: 200, backgroundColor:'none', padding: '32px 0'}}>
        <div className='p48 maxWidthLg'>
          <Typography variant="h2m" color="text.black">Feaetured Properties</Typography>
        </div>
          <div className='spaceAroundFlex m48 maxWidthLg'>
            <EstateCard estate={temp}/>
            <EstateCard estate={temp}/>
            <EstateCard estate={temp}/>   
          </div>
          <div className='p48 centerFlex'>
          <Button variant="outlined" >View More</Button>
          </div>
          
        </Box>

        

        <Box sx={{width: '100%', minHeight: 250, backgroundColor:'none', padding: '0px 0 64px 0'}}>
          <div className='p32 maxWidthLg'>
            <Typography variant="h2m" color="text.black">What our clients says</Typography>
          </div>
          <div className='spaceAroundFlex m48 maxWidthLg'>
              <RatingCard fullname="Lincoln Torff" textMessage="This is my first home purchase. I closed a month and a half ago. Terry was very helpful throughout the whole process. What really impressed me is his knowledge of the process." value={5}/>
              <RatingCard fullname="Lydia Philips" textMessage="Real Estate was simply amazing to work with. They helped my family find our new home in the best neighborhood (within our price range). Their responsiveness made us feel like we were their top priority at all times" value={5}/>
              <RatingCard fullname="Madelyn Westervelt" textMessage="Made home buying a rather pleasant experience instead of a hellish nightmare it usually is. The whole team is pretty easygoing but still professional. And they're really good." value={5}/>
          </div>
        </Box>

        <Box sx={{width: '100%', minHeight:200, backgroundColor:'primary.main', padding:"48px 0"}}>
          <div className='spaceAroundFlex maxWidthLg'>
          <Box sx={{width: 400, margin: "0 48px"}}><Form/></Box>
          <div className='columnFlex p8'>
            <Typography variant="sml" color="text.secondaryWhite">GET IN TOUCH</Typography>
            <Typography variant="h2b" color="text.white">Contact with Us!</Typography>
            <Typography variant="xs" maxWidth={300} color="text.secondaryWhite">If you need a consultation, leave your details and we will call you back as soon as we can! You may also find us here:</Typography>
            <div className='centerRowFlex lh8'>
              <FacebookOutlinedIcon sx={{color: "text.secondaryWhite"}}/>
              <FacebookOutlinedIcon sx={{color: "text.secondaryWhite"}}/>
              <FacebookOutlinedIcon sx={{color: "text.secondaryWhite"}}/>
            </div>
            <Divider/>
            <div>
              <div className='centerRowFlex lh8'><EmailOutlinedIcon sx={{color: "text.secondaryWhite"}}/> <Typography variant="md" color="text.white">contact@realestates.com</Typography></div>
              <div className='centerRowFlex lh8'><LocalPhoneOutlinedIcon sx={{color: "text.secondaryWhite"}}/> <Typography variant="md" color="text.white">+00 123 456 789</Typography></div>
              <div className='centerRowFlex lh8'><LocationOnOutlinedIcon sx={{color: "text.secondaryWhite"}}/> <Typography variant="md" color="text.white">(215) 752-0615 334 Sunset Ave Langhorne, Pennsylvania(PA), 19047</Typography>
    </div>
            </div>
          </div>
          </div>
        </Box>

      </Container>
    </ThemeProvider>
  )
}

export default Home