import React from 'react'
import { Box, Typography } from '@mui/material'
import aboutImg from '../../data/images/about/aboutImg.png'
import Maren from '../../data/images/about/MarenCulhane.png'
import Marylin from '../../data/images/about/MarylinLevin.png'
import Terry from '../../data/images/about/TerryDias.png'
import Mango from '../../data/images/about/MartinMango.png'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material/styles';

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{width: '100%', marginTop:"128px" }}>
        <div className='spaceBetweenFlex maxWidthLg p16'>
          <Box className='columnFlex' sx={{width: 450}}>
            <Typography variant="sml" color="text.secondaryBlack">ABOUT US</Typography>
            <Typography variant="h2b" color="text.black">Let Us Introduce!</Typography>
            <Typography variant="sm" marginTop={2} color="text.secondaryBlack">
                We’re a real estate agency focused on fulfilling people’s dreams.  
                We started out journey <b>6 years ago</b> when we decided to sell  
                houses that will be available for everyone. We do all we can to 
                provide houses in reasonable prices and trying to have a large 
                varianty of properties so everyone can find what they need.
            </Typography>
            
            <Typography variant="sm" marginTop={2} color="text.secondaryBlack">
                Currently in our offer we have small and cheap studios for rent 
                but also a huge, luxurious villas for sale. All of our building are 
                renovated and furnished so you can immediately move in!
            </Typography>
            
            <Typography variant="sm" marginTop={2} color="text.secondaryBlack">
                Go and find perfect home <b>right now!</b>
            </Typography>
          </Box>
          <img src={aboutImg} style={{width: 360}} alt="buildings"/>
        </div>

        <div className='maxWidthLg' style={{margin: '32px auto'}}>
          <Typography variant="h3m">Meet our team</Typography>
        </div>

        <div className='maxWidthLg'>
          <div className='spaceAroundFlex' >
            <Box sx={{width: 225, color: 'text.white', textAlign: 'center'}}>
              <img style={{width: '100%', margin: '0 0 16px 0', padding: 0}} src={Marylin}/>
              <Typography variant='lgm'>Marylin Levin</Typography>
            </Box>

            <Box sx={{width: 225, color: 'text.white', textAlign: 'center'}}>
              <img style={{width: '100%', margin: '0 0 16px 0', padding: 0}} src={Maren}/>
              <Typography variant='lgm'>Maren Culhane</Typography>
            </Box>

            <Box sx={{width: 225, color: 'text.white', textAlign: 'center'}}>
              <img style={{width: '100%', margin: '0 0 16px 0', padding: 0}} src={Terry}/>
              <Typography variant='lgm'>Terry Dias</Typography>
            </Box>

            <Box sx={{width: 225, color: 'text.white', textAlign: 'center'}}>
              <img style={{width: '100%', margin: '0 0 16px 0', padding: 0}} src={Mango}/>
              <Typography variant='lgm'>Martin Mango</Typography>
            </Box>
          </div>
        </div>
        <div style={{position: 'relative', width:'100%', zIndex:'-1'}}>
          <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A2B34" fillOpacity="1" d="M0,192L60,213.3C120,235,240,277,360,272C480,267,600,213,720,165.3C840,117,960,75,1080,74.7C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default About