import { Box, Grid, Typography, Card } from '@mui/material'
import EstateCard from "../../../EstateCard";
import React from 'react'

const All = () => {
  return (
    <Box sx={{width: '80%', margin: '16px auto'}}>
      <Typography variant="h3m">Our Offer</Typography>
      <Box>
        <Typography variant="lgm">For Sale</Typography>
        <Grid container spacing={2}>
          <Grid item><EstateCard/></Grid>
          <Grid item><EstateCard/></Grid>
          <Grid item><EstateCard/></Grid>
          <Grid item><Card>See more</Card></Grid>
        </Grid>
      </Box>

      <Box>
        <Typography variant="lgm">For Rent</Typography>
        <Grid container spacing={2}>
          <Grid item><EstateCard/></Grid>
          <Grid item><EstateCard/></Grid>
          <Grid item><EstateCard/></Grid>
          <Grid item><Card>See more</Card></Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default All