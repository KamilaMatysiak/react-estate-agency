import React from 'react'
import theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';
import {Card, Typography, Rating } from '@mui/material';

const RatingCard = (props) => {
  return (
    <ThemeProvider theme={theme}>
        <Card className='columnFlex centerFlex p32' sx={{width: 300, height: 200, justifyContent:'space-around'}}>
            <Typography variant="sm_italic" color="text.secondaryBlack" textAlign="center">“{props.textMessage}”</Typography>
            <Rating name="read-only" value={props.value} readOnly />
            <Typography variant="mdm" color="text.black" padding="8px">{props.fullname}</Typography>
        </Card>
    </ThemeProvider>
  )
}

export default RatingCard