import { Box, Grid, ButtonBase } from '@mui/material'
import EstateCard from "../../EstateCard";
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getAllEstates } from '../../../actions/estates';
import { useNavigate } from 'react-router-dom';

const All = () => {
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
          spacing={5}
          alignItems="stretch"
          maxWidth='85vw'
          margin={2}
        >

        {estates.map((estate) => (
                <>{!estate.message && <ButtonBase onClick={() => openEstate(estate._id)}><EstateCard key={estate._id} estate={estate}/></ButtonBase>}</>
              ))}

      </Grid>
    </Box>
  )
}

export default All