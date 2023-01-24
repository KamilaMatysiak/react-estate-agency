import { Box, Grid, ButtonBase, Typography } from '@mui/material'
import EstateCard from "../../EstateCard";
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux';
import { getAllEstates } from '../../../actions/estates';
import { useNavigate, useParams, useLocation } from 'react-router-dom';


const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {state} = useLocation();
  const openEstate = (id) => navigate(`/estate/${id}`);
  return (
    <Box>
         <Typography variant="h3m">{state.data.data.length != 0 ? 'You may like these...' : "i'm afraid we don't have what you're looking for :("}</Typography>
      <Grid
          container
          direction="row"
          spacing={5}
          alignItems="stretch"
          maxWidth='85vw'
          margin={2}
        >

        {state.data.data.map((estate) => (
                <>{!estate.message && <ButtonBase onClick={() => openEstate(estate._id)}><EstateCard key={estate._id} estate={estate}/></ButtonBase>}</>
              ))}
      </Grid>
    </Box>
  )
}

export default Search