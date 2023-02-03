import { Box, Grid, ButtonBase } from '@mui/material'
import EstateCard from "../../EstateCard";
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getAllEstates } from '../../../actions/estates';
import { useNavigate } from 'react-router-dom';

const ApartmentRent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {estates} = useSelector((state) => state.estates);

  useEffect(() => {
    dispatch(getAllEstates());
  }, [dispatch])

  const openEstate = (id) => navigate(`/estate/${id}`);
  return (
    <Box>
      <Grid
        container
        direction="row"
        alignItems="stretch"
        height='100%'
        maxWidth='80vw'
        margin={2}
      >

      {estates.map((estate) => (
              <>
               { estate.type == "Apartment" && estate.status == "For Rent"
                && <Grid item xs={12} md={8} lg={4}><ButtonBase onClick={() => openEstate(estate._id)}><EstateCard key={estate._id} estate={estate}/></ButtonBase></Grid>}</>
            ))}

    </Grid>
  </Box>
  )
}

export default ApartmentRent