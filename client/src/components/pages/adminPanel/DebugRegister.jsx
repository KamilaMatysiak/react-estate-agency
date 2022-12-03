import React, {useState} from 'react'
import theme from '../../Theme'
import { ThemeProvider, Box, TextField, Button, Typography } from '@mui/material'
import logo from '../../../data/images/logoWhite.svg'
import wave from '../../../data/images/wave.svg'
import { useDispatch } from 'react-redux'
import { register } from '../../../actions/auth'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const initialState = {username: '', password: ''}
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(register(formData, navigate));
  }

  const handleChange = (e) => {
    console.log(e.target.name, ' : ', e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <ThemeProvider theme={theme}>
      
      <svg style={{position: 'absolute', top: 0, zIndex: -1}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A2B34" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,85.3C384,64,480,96,576,138.7C672,181,768,235,864,256C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      
      <Box bgColor='#fff' sx={{maxWidth: 800, maxHeight: 400, margin: '10% auto', display: 'flex', backgroundColor: '#fff', zIndex: 999, alignItems: 'center', justifyContent: 'space-between', boxShadow: '0px 2px 4px rgba(0,0,0,0.2)'}}>
      <form onSubmit={handleSubmit}>
        <Box className='columnFlex p48'>
            <Typography variant="h2b" marginBottom={2}>Debug Register</Typography>
            <TextField name="username" variant='outlined' label='Username' margin="dense" required fullWidth onChange={handleChange}/>
            <TextField name="password" variant='outlined' type='password' label='Password' margin="dense" required fullWidth onChange={handleChange}/>
            <Button type="submit" variant='contained' fullWidth sx={{boxShadow: 'none', backgroundColor: 'primary.main', marginTop: 2, height: '48px'}}>Create Account</Button>
        </Box>
    </form>

      </Box>
    </ThemeProvider>
  )
}

export default LoginPage