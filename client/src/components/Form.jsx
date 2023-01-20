import React, {useState, useEffect} from 'react'
import { Box, TextField, Button } from '@mui/material'
import theme from './Theme'
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { createOffer } from '../actions/offers';
const Form = ({estate}) => {
  const dispatch = useDispatch();
  const [offerData, setOfferData] = useState({
    name: '',
    email: '',
    message: '',
    estateId: ''
  });  

  const handleSubmit = (e) => {
    e.preventDefault();
    offerData.estateId=estate;
    dispatch(createOffer({ ...offerData }));
    setOfferData({
      name: '',
      email: '',
      message: '',
      estateId: ''
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box sx={{backgroundColor:"text.white", padding: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.25)'}}>
          <TextField 
            variant="outlined" 
            label="Full Name"
            id="outlined-required"
            required 
            fullWidth
            margin='dense'
            value={offerData.name}
            onChange={(e) => setOfferData({ ...offerData, name: e.target.value })}
            />
          <TextField 
            variant="outlined" 
            label="E-mail Address"
            id="outlined-required"
            required 
            fullWidth
            margin='dense'
            value={offerData.email}
            onChange={(e) => setOfferData({ ...offerData, email: e.target.value })}
            />
          <TextField 
            variant="outlined" 
            label="Message"
            rows={3}
            multiline
            id="outlined-textarea"
            fullWidth
            margin='dense'
            value={offerData.message}
            onChange={(e) => setOfferData({ ...offerData, message: e.target.value })}
            />
          <Button fullWidth variant="contained" type="submit">Send Message</Button>
        </Box>
      </form>
    </ThemeProvider>
  )
}

export default Form