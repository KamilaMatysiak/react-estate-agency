import React, {useState} from 'react'
import theme from '../../Theme'
import { ThemeProvider, Box, TextField, Button, Typography, Alert } from '@mui/material'
import logo from '../../../data/images/logoWhite.svg'
import wave from '../../../data/images/wave.svg'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../actions/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';


const LoginPage = () => {
  const initialState = {username: '', password: ''}
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onError = (errors, e) => console.log('zabij mnie');
  const {error} = useSelector((state) => state.auth);

  const onSubmit = (d, e) => {
    e.preventDefault();
    console.log(d, e);
    dispatch(login(d, navigate));
    
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <ThemeProvider theme={theme}>
      
      <svg style={{position: 'absolute', top: 0, zIndex: -1}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2A2B34" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,85.3C384,64,480,96,576,138.7C672,181,768,235,864,256C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      
      <Box sx={{maxWidth: 800, maxHeight: 400, margin: '10% auto', display: 'flex', backgroundColor: '#fff', zIndex: 999, alignItems: 'center', justifyContent: 'space-between', boxShadow: '0px 2px 4px rgba(0,0,0,0.2)'}}>
        <Box className='columnFlex p48' sx={{width: '40%'}}>
          <Typography variant="h2b" marginBottom={2}>Log In</Typography>
          {error ? <Alert sx={{marginBottom: 2}} severity="error">Invalid username or password!</Alert>:<></>}
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            
            <TextField 
              name="username" 
              variant='outlined' 
              label='Username' 
              margin="dense" 
              fullWidth 
              onChange={handleChange}
              {...register("username", { required: true})}
              helperText={errors.username && "Username is required"}
              error={errors.username}
              />
            <TextField 
              name="password" 
              type="password" 
              variant='outlined' 
              label='Password' 
              margin="dense"  
              fullWidth 
              onChange={handleChange}
              {...register("password", { required: true})}
              helperText={errors.password && "Password is required"}
              error={errors.password}/>
            <Button type="submit" variant='contained' sx={{boxShadow: 'none', backgroundColor: 'primary.main', marginTop: 2, height: '48px'}}>Login</Button>
          </form>
        </Box>
        
        <Box className='columnFlex centerFlex' sx={{width: '60%', height: 400, backgroundColor: 'primary.light', backgroundImage: `url("/loginBanner.png")`}}>
            <img src={logo} alt="Real Estate" width={200}/>
            <Typography variant="h3" color="#fff" margin={2}>Admin Panel</Typography>
            <Button variant='outlined' href='/' sx={{color:'#fff', borderColor: '#fff', width: 200}}>Go to client page</Button>
        </Box>
      </Box>

    </ThemeProvider>
  )
}

export default LoginPage