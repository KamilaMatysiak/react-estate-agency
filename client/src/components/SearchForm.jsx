import React from 'react'
import { Box, TextField, Button, InputAdornment, Autocomplete, Tab, Tabs, Typography } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import theme from './Theme'
import { ThemeProvider } from '@mui/material'
const SearchForm = () => {
const options=[
        { label: "House", type: "Buy"},
        { label: "Apartment", type: "Buy"},
        { label: "House", type: "Rent"},
        { label: "Apartment", type: "Rent"},
    ]

  return (
    <ThemeProvider theme={theme}>
        
        <Box sx={{padding: 4, backgroundColor: '#fff', boxShadow: '4px 0 4px rgba(0,0,0,0.25)', width: '1200px'}}>
            <Typography variant="lgm">Search for available estates</Typography>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: "15px"}}>
            <TextField 
                variant="outlined"
                label="Localization"
                margin="dense"  
                sx={{width: '250px'}}
                InputProps={{
                endAdornment: <InputAdornment position="end"><LocationOnOutlinedIcon/></InputAdornment>,
            }}/>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                groupBy={(option) => option.type}
                sx={{width: '250px'}}
                renderInput={(params) => <TextField margin="dense" {...params} label="Type"/>
                }/>
            <TextField 
                variant="outlined"
                label="Budget" 
                margin="dense" 
                sx={{width: '250px'}}
                InputProps={{
                    endAdornment: <InputAdornment position="end"><AttachMoneyOutlinedIcon/></InputAdornment>,
            }}/>
            <Button variant="contained" sx={{padding: "15px", width:225, boxShadow: 'none', backgroundColor: "primary.light"}}>FIND</Button>
            </Box>
        </Box>
    </ThemeProvider>
        
  )
}

export default SearchForm