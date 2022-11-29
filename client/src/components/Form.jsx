import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';
const Form = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor:"text.white", padding: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.25)'}}>
        <TextField 
          variant="outlined" 
          label="Full Name"
          id="outlined-required"
          required 
          fullWidth
          margin='dense'/>
        <TextField 
          variant="outlined" 
          label="E-mail Address"
          id="outlined-required"
          required 
          fullWidth
          margin='dense'/>
        <TextField 
          variant="outlined" 
          label="Message"
          rows={3}
          multiline
          id="outlined-textarea"
          fullWidth
          margin='dense'/>
        <Button fullWidth variant="contained">Send Message</Button>
      </Box>
    </ThemeProvider>
  )
}

export default Form