import React from 'react'
import theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';
import {Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import placeholder from '../data/images/estates/placeholder.png'

const EstateCard = () => {
  return (
    <ThemeProvider theme={theme}>
        <Card sx={{maxWidth: 350, padding: 0, margin: 0}}>
            <CardMedia 
                sx={{padding: 0, margin: 0}}
                component="img"
                height="200"
                image={placeholder}
                alt="green iguana"
            />
            <CardContent>
                <div className='columnFlex flexWrap'>
                    <Typography margin="2px" variant="xlm">Luxury Family House</Typography>
                    <div className='centerRowFlex' style={{marginBottom: "8px"}}> 
                        <LocationOnOutlined fontSize="small" color="text.secondaryBlack"/> 
                        <Typography color="text.secondaryBlack" variant="sm">Woodland Hills, California</Typography>
                    </div>
                </div>
                <div className='spaceAroundFlex flexWrap' style={{margin: "8px 0"}}>
                    <div className='centerRowFlex'> 
                        <BedOutlinedIcon 
                            sx= {{margin: '2px'}}
                            color="text.secondaryBlack" 
                            fontSize="small"/> 
                        <Typography color="text.secondaryBlack" variant="sm">4 Bedrooms</Typography> 
                    </div>
                    <div className='centerRowFlex'> 
                        <BathtubOutlinedIcon 
                            sx= {{margin: '2px'}}
                            color="text.secondaryBlack" 
                            fontSize="small"/> 
                        <Typography color="text.secondaryBlack" variant="sm">2 Bathrooms</Typography>
                    </div>
                    <div className='centerRowFlex'> 
                        <KitchenOutlinedIcon 
                            sx= {{margin: '2px'}}
                            color="text.secondaryBlack"
                            fontSize="small"/> 
                        <Typography color="text.secondaryBlack" variant="sm">100 sqft</Typography> 
                    </div>
                </div>
                <CardActions sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    <Typography variant="xlm">$11 290 500</Typography>
                    <Button variant="contained" sx={{backgroundColor:'primary.main', boxShadow: 'none'}}>View Details</Button>
                </CardActions>
            </CardContent>
            
        </Card>
    </ThemeProvider>
  )
}

export default EstateCard