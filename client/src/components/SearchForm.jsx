import React, {useState} from 'react'
import { Box, TextField, Button, InputAdornment, Autocomplete, Typography, Paper } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import theme from './Theme'
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material'
import { useDispatch } from 'react-redux';
import { getFilteredEstates } from '../actions/estates';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const SearchForm = () => {
    const query = useQuery();
    const dispatch = useDispatch();
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState({
        localization: '',
        type: '',
        budget: 0
    });

    const options=[
            { label: "House", type: "Buy"},
            { label: "Apartment", type: "Buy"},
            { label: "House", type: "Rent"},
            { label: "Apartment", type: "Rent"},
        ]
    
    const navigate = useNavigate();

    const handleSearch = () => {
        if(search) {
            dispatch(getFilteredEstates(search, navigate));
          }
    }

  return (
    <ThemeProvider theme={theme}>
        
        <Box sx={{padding: 4, backgroundColor: '#fff', boxShadow: '4px 0 4px rgba(0,0,0,0.25)', width: '1000px'}}>
            <Typography variant="lgm">Search for available estates</Typography>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: "15px"}}>
            <TextField 
                variant="outlined"
                label="Localization"
                margin="dense"  
                onChange={(e) => {setSearch({...search, localization: e.target.value})}}
                sx={{width: '250px'}}
                InputProps={{
                endAdornment: <InputAdornment position="end"><LocationOnOutlinedIcon/></InputAdornment>,
            }}/>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                PaperComponent={({ children }) => (
                    <Paper style={{ background: "white" }}>{children}</Paper>
                  )}
                groupBy={(option) => option.type}
                sx={{width: '250px'}}
                onChange={(e, newValue)=> setSearch({ ...search, type: newValue })}
                renderInput={(params) => <TextField margin="dense" {...params} label="Type"/>
                }/>
            <TextField 
                variant="outlined"
                label="Budget" 
                margin="dense" 
                sx={{width: '250px'}}
                onChange={(e) => {setSearch({...search, budget: e.target.value})}}
                InputProps={{
                    endAdornment: <InputAdornment position="end"><AttachMoneyOutlinedIcon/></InputAdornment>,
            }}/>
            <Button 
                variant="contained" 
                sx={{padding: "16px", width: 200, marginTop: '4px', boxShadow: 'none', backgroundColor: "primary.light"}}
                onClick={handleSearch}
                >FIND</Button>
            </Box>
        </Box>
    </ThemeProvider>
        
  )
}

export default SearchForm