import React from 'react'
import { Typography, Box, Divider } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

import Form from '../Form'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material/styles';

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{width: '100%', margin:" 128px 0" }}>
            <div className='spaceAroundFlex maxWidthLg'>
              <div className='columnFlex p8'>
                <Typography variant="sml" color="text.secondaryBlack">GET IN TOUCH</Typography>
                <Typography variant="h2b" color="text.black">Contact with Us!</Typography>
                <Typography variant="xs" maxWidth={300} color="text.secondaryBlack">If you need a consultation, leave your details and we will call you back as soon as we can! You may also find us here:</Typography>
                <div className='centerRowFlex lh8'>
                  <FacebookOutlinedIcon sx={{color: "text.secondaryBlack"}}/>
                  <FacebookOutlinedIcon sx={{color: "text.secondaryBlack"}}/>
                  <FacebookOutlinedIcon sx={{color: "text.secondaryBlack"}}/>
                </div>
                <Divider/>
                <div>
                  <div className='centerRowFlex lh8'><EmailOutlinedIcon sx={{color: "text.secondaryBlack"}}/> <Typography variant="md" color="text.black">contact@realestates.com</Typography></div>
                  <div className='centerRowFlex lh8'><LocalPhoneOutlinedIcon sx={{color: "text.secondaryBlack"}}/> <Typography variant="md" color="text.black">+00 123 456 789</Typography></div>
                  <div className='centerRowFlex lh8'><LocationOnOutlinedIcon sx={{color: "text.secondaryBlack"}}/> <Typography variant="md" color="text.black">(215) 752-0615 334 Sunset Ave Langhorne, Pennsylvania(PA), 19047</Typography></div>
                </div>
              </div>
              <Box sx={{width: 400, margin: "0 48px"}}><Form/></Box>
            </div>
          </Box>
      </ThemeProvider>
  )
}

export default Contact