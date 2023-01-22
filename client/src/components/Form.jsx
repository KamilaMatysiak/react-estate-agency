import React, {useState, useEffect} from 'react'
import { Box, TextField, Button } from '@mui/material'
import theme from './Theme'
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { createOffer } from '../actions/offers';
import { useForm } from 'react-hook-form';
const Form = ({estate}) => {
  const dispatch = useDispatch();
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onError = (errors, e) => console.log(errors);
  const [offerData, setOfferData] = useState({
    name: '',
    email: '',
    message: '',
    estateId: ''
  });  

  const onSubmit = (d, e) => {
    e.preventDefault();
    d.estateId=estate || 1;
    console.log(d);
    console.log(offerData)
    dispatch(createOffer({ ...d }));
    setOfferData({
      name: '',
      email: '',
      message: '',
      estateId: ''
    })
    reset();
  }

  return (
    <ThemeProvider theme={theme}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit, onError)}>
        <Box sx={{backgroundColor:"text.white", padding: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.25)'}}>
          <TextField 
            variant="outlined" 
            label="Full Name"
            id="outlined-required"
            required 
            fullWidth
            margin='dense'
            onChange={(e) => setOfferData({ ...offerData, name: e.target.value })}
            {...register("name", { required: true})}
              helperText={errors.name && "Name is required"}
              error={errors.name}
            />
          <TextField 
            variant="outlined" 
            label="E-mail Address"
            id="outlined-required"
            required 
            fullWidth
            margin='dense'
            onChange={(e) => setOfferData({ ...offerData, email: e.target.value })}
            {...register("email", { required: true})}
              helperText={errors.email && "Name is required"}
              error={errors.email}
            />
          <TextField 
            variant="outlined" 
            label="Message"
            rows={3}
            multiline
            id="outlined-textarea"
            fullWidth
            margin='dense'
            onChange={(e) => setOfferData({ ...offerData, message: e.target.value })}
            {...register("message", { maxLength: 250})}
              helperText={errors.message && "Your message shouldn't be longer than 250 characters."}
              error={errors.message}
            />
          <Button fullWidth variant="contained" type="submit">Send Message</Button>
        </Box>
      </form>
    </ThemeProvider>
  )
}

export default Form