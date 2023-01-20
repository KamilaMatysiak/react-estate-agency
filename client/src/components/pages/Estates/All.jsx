import { Box, Grid, Typography, Card } from '@mui/material'
import EstateCard from "../../EstateCard";
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getEstates } from '../../../actions/estates';

const All = () => {
  const dispatch = useDispatch();
  const [currentID, setCurrentID] = useState(0);
  const {estates} = useSelector((state) => state.estates);

  useEffect(() => {
    dispatch(getEstates());
  }, [currentID, dispatch])
  
  return (
    <Box>
      <Grid
          container
          direction="row"
          spacing={5}
          alignItems="stretch"
          maxWidth='80vw'
          margin={2}
        >

        {estates.map((estate) => (
                <EstateCard key={estate._id} estate={estate}/>
              ))}

      </Grid>
    </Box>
  )
}

export default All