import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Form from '../Form'
import theme from '../Theme'
import { ThemeProvider } from '@mui/material/styles';
import placeholder from '../../data/images/estates/placeholder.png'
import {BedOutlined, 
  CheckroomOutlined, 
  PoolOutlined, 
  DirectionsCarOutlined, 
  SensorWindowOutlined, 
  LocalFloristOutlined, 
  BathtubOutlined, 
  KitchenOutlined, 
  WhatshotOutlined, 
  LocalParkingOutlined, 
  AcUnitOutlined, 
  CalendarTodayOutlined, 
  ArrowBackOutlined,
  LocationOnOutlined
} from '@mui/icons-material';

const Property = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters sx={{margin:"128px 0"}}>
        <ArrowBackOutlined/>
        <Box sx={{backgroundColor: "primary.main", color: 'text.white', width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '100px'}}>
          <div style={{position: 'relative', width: '600px', height: '100%'}}>
            <div className="columnFlex spaceBetweenFlex" style={{position: 'absolute', height: '20%', top: '-10%' , width: '100%'}}>
              <img src={placeholder} alt="house" style={{width: '100%', margin: 0, padding: 0}}/>
              <div className='centerFlex p16' style={{color: '#333'}}> 1 2 3</div>
            </div>
            </div>
          <div className='columnFlex'>
            <Typography variant="h2">Luxury Family House</Typography>
            <div><LocationOnOutlined/><Typography variant="sml">Woodland Hills, California</Typography></div>
            <Typography variant="h2b">$290,500</Typography>
            <Typography variant="sml">2900 zł / m2</Typography>
          </div>
        </Box>
        <div className='spaceBetweenFlex maxWidthXl flexWrap'>
          <div style={{minWidth: '500px', maxWidth: '50%'}}>
            <Typography variant="lgm">Details</Typography>
            <div className='spaceAroundFlex'>
              <div className='columnFlex'>
                <div className='tableItem'><BedOutlined className="p8"/><Typography className="p8" variant="sm">Bedrooms:</Typography> <Typography variant="smm">1</Typography></div>
                <div className='tableItem'><CheckroomOutlined className="p8"/><Typography className="p8" variant="sm">Built-in-wardrobes:</Typography> <Typography variant="smm">2</Typography></div>
                <div className='tableItem'><PoolOutlined className="p8"/><Typography className="p8" variant="sm">Pool</Typography></div>
                <div className='tableItem'><AcUnitOutlined className="p8"/><Typography className="p8" variant="sm">Air Condotioning</Typography></div>
              </div>
              <div className='columnFlex'>
                <div className='tableItem'><BathtubOutlined className="p8"/><Typography className="p8" variant="sm">Bathrooms:</Typography> <Typography variant="smm">1</Typography></div>
                <div className='tableItem'><LocalParkingOutlined className="p8"/><Typography className="p8" variant="sm">Parking spaces:</Typography> <Typography variant="smm">1</Typography></div>
                <div className='tableItem'><DirectionsCarOutlined className="p8"/><Typography className="p8" variant="sm">Garage</Typography></div>
                <div className='tableItem'><SensorWindowOutlined className="p8"/><Typography className="p8" variant="sm">External electric shutters</Typography></div>
              </div>
              <div className='columnFlex'>
                <div className='tableItem'><KitchenOutlined className="p8"/><Typography className="p8" variant="sm">Kitchen:</Typography> <Typography variant="smm">1</Typography></div>
                <div className='tableItem'><CalendarTodayOutlined className="p8"/><Typography className="p8" variant="sm">Year of construction:</Typography> <Typography variant="smm">2023</Typography></div>
                <div className='tableItem'><LocalFloristOutlined className="p8"/><Typography className="p8" variant="sm">Garden</Typography></div>
                <div className='tableItem'><WhatshotOutlined className="p8"/><Typography className="p8" variant="sm">Underfloor heating in bathrooms</Typography></div>
              </div>
            </div>

            <Typography variant="lgm">Description</Typography>
            <div className='columnFlex m8'>
            <Typography variant="sm">
              This stunning Mid-Century Modern home is located in Woodland Hills, which is an exclusive part of the Cordera community that was built by Keller Homes. The main level features an open floor plan complete with white oak hardwood flooring complimented with birch stain.  The remote-controlled blinds allow you to determine how much natural light is just right for whatever mood you find yourself in.
            </Typography>
            <br/> 
            <Typography variant="sm">
              The 42” fireplace is framed with stainless steel reflective black crushed glass. The gourmet kitchen is designed to be the heart of the home, which opens into the great room and dining area. The kitchen is complete 
              with a walk-in pantry, full-extension, and slow-close maple cabinetry, Gray Lagoon quartz surfaces, and stainless steel appliances.
            </Typography>
            </div>
          </div>
          <div style={{maxWidth: '400px', width: '70%'}}>
            <div className='m8' style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: 48, height: 48, borderRadius: 180, backgroundColor: '#333', marign: 8}}></div>
              <div className='columnFlex p16'>
                <Typography variant="mdm">Name Surname</Typography>
                <Typography variant="sm">+00 123 456 789</Typography>
              </div>
            </div>
            <Form estate='63ae186036c94457dd9d00de'/>
          </div>
        </div>
        </Container>
    </ThemeProvider>
  )
}

export default Property