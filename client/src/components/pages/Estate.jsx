import React, {useEffect} from 'react'
import { Box, Container, Typography, ThemeProvider, Grid, CardMedia } from '@mui/material'
import placeholder from '../../data/images/estates/placeholder.png'
import {BedOutlined, CheckroomOutlined, PoolOutlined, DirectionsCarOutlined, SensorWindowOutlined, LocalFloristOutlined, BathtubOutlined, KitchenOutlined, WhatshotOutlined, LocalParkingOutlined, AcUnitOutlined, CalendarTodayOutlined, ArrowBackOutlined,LocationOnOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getEstate } from '../../actions/estates';

import Form from '../Form'
import theme from '../Theme'
import { getEmployee } from '../../actions/employees';


const Property = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const {estates, estate} = useSelector((state) => state.estates);
  const {object} = useSelector((state) => state.objects);

  useEffect(() => {

    dispatch(getEstate(id));
  }, [id])

  useEffect(() => {
    if(estate) dispatch(getEmployee(estate.data.employeeId));
  }, [estate])

  if(!estate) return null;
  if(!object) return null;
  

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters sx={{margin:"128px 0"}}>
        <ArrowBackOutlined onClick={() => navigate(-1)}/>
        <Box sx={{backgroundColor: "primary.main", color: 'text.white', width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '100px'}}>
          <div style={{position: 'relative', width: '700px', height: '100%', marginRight: '5%'}}>
            <div className="columnFlex spaceBetweenFlex" style={{position: 'absolute', top: '-10%' , width: '100%'}}>
            {estate.data.estateProperties.gallery && <CardMedia style={{width: 650, height: 350}} image={estate.data.estateProperties.gallery}/>}
            </div>
          </div>
          <div className='columnFlex' style={{height: '50%', justifyContent: 'space-around', marginLeft: '32px'}}>
            <div className='columnFlex'>
            <Typography variant="h2">{estate.data.name}</Typography>
            <div><LocationOnOutlined/><Typography variant="sml">{estate.data.estateLocalization.street} {estate.data.estateLocalization.number}, {estate.data.estateLocalization.city}</Typography></div>
            </div>
            <div className='columnFlex' style={{textAlign: 'right'}}>
            <Typography variant="h2b">${estate.data.price}</Typography>
            <Typography variant="sml">{estate.data.price/100} / m2</Typography>
            </div>
          </div>
        </Box>
        <div className='spaceBetweenFlex maxWidthXl flexWrap'>
          <div style={{minWidth: '500px', maxWidth: '42%'}}>
            <Typography variant="lgm">Details</Typography>
            <Grid container spacing={2}>
                <Grid item xs><div className='tableItem'><BedOutlined className="p8"/><Typography className="p8" variant="sm">Bedrooms:</Typography> <Typography variant="smm">{estate.data.estateProperties.bedrooms}</Typography></div></Grid>
                <Grid item xs><div className='tableItem'><BathtubOutlined className="p8"/><Typography className="p8" variant="sm">Bathrooms:</Typography> <Typography variant="smm">{estate.data.estateProperties.bathrooms}</Typography></div></Grid>
                <Grid item xs><div className='tableItem'><KitchenOutlined className="p8"/><Typography className="p8" variant="sm">Kitchen:</Typography> <Typography variant="smm">{estate.data.estateProperties.kitchen}</Typography></div></Grid>
                <Grid item xs><div className='tableItem'><CheckroomOutlined className="p8"/><Typography className="p8" variant="sm">Built-in-wardrobes:</Typography> <Typography variant="smm">{estate.data.estateProperties.builtInWardrobes}</Typography></div></Grid>
                <Grid item xs><div className='tableItem'><LocalParkingOutlined className="p8"/><Typography className="p8" variant="sm">Parking spaces:</Typography> <Typography variant="smm">{estate.data.estateProperties.parkingSpaces || "0"}</Typography></div></Grid>
                <Grid item xs><div className='tableItem'><CalendarTodayOutlined className="p8"/><Typography className="p8" variant="sm">Year of construction:</Typography> <Typography variant="smm">{estate.data.estateProperties.contructionYear ? estate.data.estateProperties.contructionYear.slice(0,4) : "NA"}</Typography></div></Grid>
                {estate.data.estateProperties.pool ?              <Grid item xs><div className='tableItem'><PoolOutlined className="p8"/><Typography className="p8" variant="sm">Pool</Typography></div></Grid> : <></>}
                {estate.data.estateProperties.airConditioning ?   <Grid item xs><div className='tableItem'><AcUnitOutlined className="p8"/><Typography className="p8" variant="sm">Air Conditioning</Typography></div></Grid> : <></>}
                {estate.data.estateProperties.garage ?            <Grid item xs><div className='tableItem'><DirectionsCarOutlined className="p8"/><Typography className="p8" variant="sm">Garage</Typography></div></Grid>: <></>}
                {estate.data.estateProperties.electricShutters ?  <Grid item xs><div className='tableItem'><SensorWindowOutlined className="p8"/><Typography className="p8" variant="sm">External electric shutters</Typography></div></Grid>: <></>}
                {estate.data.estateProperties.garden ?            <Grid item xs><div className='tableItem'><LocalFloristOutlined className="p8"/><Typography className="p8" variant="sm">Garden</Typography></div></Grid>: <></>}
                {estate.data.estateProperties.underfloorHeating ? <Grid item xs><div className='tableItem'><WhatshotOutlined className="p8"/><Typography className="p8" variant="sm">Underfloor heating in bathrooms</Typography></div></Grid>: <></>}
            </Grid>

            <Typography variant="lgm">Description</Typography>
            <div className='columnFlex m8'>
            <Typography variant="sm">
              {estate.data.estateProperties.description}  
            </Typography>
            </div>
          </div>
          <div style={{maxWidth: '400px', width: '70%'}}>
            <div className='m8' style={{display: 'flex', alignItems: 'center'}}>
            <CardMedia style={{width: 48, height: 48, borderRadius: 180, marign: 8}} image={object.data.avatar}/>
              <div className='columnFlex p16'>
                <Typography variant="mdm">{object.data.name}</Typography>
                <Typography variant="sm">{object.data.phoneNumber ? object.data.phoneNumber : object.data.email }</Typography>
              </div>
            </div>
            <Form estate={estate.data._id}/>
          </div>
        </div>
        </Container>
    </ThemeProvider>
  )
}

export default Property