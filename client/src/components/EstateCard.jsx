import React from 'react'
import theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';
import {Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import placeholder from '../data/images/estates/placeholder.png'

const EstateCard = ({estate}) => {
  return (
    <ThemeProvider theme={theme}>
        <Card sx={{minWidth: 350, maxWidth: 375, padding: 0, margin: 2}}>
            <CardMedia 
                sx={{padding: 0, margin: 0}}
                component="img"
                height="200"
                image={estate.estateProperties ?(estate.estateProperties.gallery ? estate.estateProperties.gallery : placeholder): placeholder}
                alt="green iguana"
            />
            <CardContent>
                <div className='columnFlex flexWrap' style={{alignItems: 'flex-start', marginLeft: '8px'}}>
                    <Typography margin="2px" variant="xlm">{estate.name}</Typography>
                    <div className='centerRowFlex' style={{marginBottom: "8px"}}> 
                        <LocationOnOutlined fontSize="small" color="text.secondaryBlack"/> 
                        <Typography color="text.secondaryBlack" variant="sm">{estate.estateLocalization.street}, {estate.estateLocalization.city}</Typography>
                    </div>
                </div>
                <div className='spaceAroundFlex flexWrap' style={{margin: "8px 0"}}>
                    <div className='centerRowFlex'> 
                        <BedOutlinedIcon 
                            sx= {{margin: '2px'}}
                            color="text.secondaryBlack" 
                            fontSize="small"/> 
                        <Typography color="text.secondaryBlack" variant="sm">{estate.estateProperties.bedrooms} Bedrooms</Typography> 
                    </div>
                    <div className='centerRowFlex'> 
                        <BathtubOutlinedIcon 
                            sx= {{margin: '2px'}}
                            color="text.secondaryBlack" 
                            fontSize="small"/> 
                        <Typography color="text.secondaryBlack" variant="sm">{estate.estateProperties.bathrooms} Bathrooms</Typography>
                    </div>
                    <div className='centerRowFlex'> 
                        <KitchenOutlinedIcon 
                            sx= {{margin: '2px'}}
                            color="text.secondaryBlack"
                            fontSize="small"/> 
                        <Typography color="text.secondaryBlack" variant="sm">{estate.estateProperties.kitchen} Kitchen</Typography> 
                    </div>
                </div>
                <CardActions sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    <Typography variant="xlm">${estate.price}{estate.status=="For Rent" && <Typography variant="xs">/ month</Typography>}</Typography>
                    <Button variant="contained" sx={{backgroundColor:'primary.main', boxShadow: 'none', marginLeft: 2}}>View Details</Button>
                </CardActions>
            </CardContent>
            
        </Card>
    </ThemeProvider>
  )
}

export default EstateCard