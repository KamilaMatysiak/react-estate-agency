import { Box, Grid, Typography, Card } from '@mui/material'
import EstateCard from "../../EstateCard";
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getEstates } from '../../../actions/estates';
import estates from '../../../reducers/estates';

const All = () => {
  const dispatch = useDispatch();
  const [currentID, setCurrentID] = useState(0);
  const {estates} = useSelector((state) => state.estates);

  useEffect(() => {
    dispatch(getEstates());
  }, [currentID, dispatch])
  
  return (
    <Box>
      {estates.map((estate) => (
        <div key={estate._id}>{estate.name}</div>
      ))}
    </Box>
  )
}

export default All