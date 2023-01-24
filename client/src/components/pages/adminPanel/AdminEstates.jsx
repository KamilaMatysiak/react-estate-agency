import React, { useState, useEffect } from 'react'
import theme from '../../Theme'
import { CardMedia, OutlinedInput, InputAdornment, InputLabel, FormControl, Typography, Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider, Grid, Divider, Autocomplete, DialogContentText, Paper, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createEstate, getEstates, deleteEstate, updateEstate, getEstatesBySearch } from '../../../actions/estates';
import { getAllEmployees } from '../../../actions/employees';
import { Container } from '@mui/system';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileBase from 'react-file-base64';
import { useNavigate, useLocation } from 'react-router-dom';
import Pagination from '../../Pagination';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AdminEstates = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [currentEstate, setCurrentEstate] = useState('');
  const [estateData, setEstateData] = useState({
    name: '',
    price: '',
    status: '',
    employeeId: '',
    type: '',
    estateLocalization: {
      city: '',
      street: '',
      number: '',
    },
    estateProperties: {
      description: '',
      constructionYear: '',
      bedrooms: '',
      bathrooms: '',
      kitchen: '',
      builtInWardrobes: '',
      parkingSpaces: '',
      features: '',
      gallery: ''
    }  
  })

  const options = [
    { label: "Garden", name: 'garden', value: false },
    { label: "Garage", name: 'garage', value: false },
    { label: "Pool", name: 'pool', value: false },
    { label: "Air Conditioning", name: 'airConditioning', value: false },
    { label: "Electric Shutters", name: 'electricShutters', value: false },
    { label: "Underfloor Heating", name: 'underfloorHeating', value: false },
  ];

  const typeChoices = ["House", "Apartment"];
  const statusChoices = [ "For Sale", "For Rent", "Sold", "Rented"];

  const [currentID, setCurrentID] = useState(0);
  const { estates } = useSelector((state) => state.estates);
  const poka = useSelector((state) => console.log(state));
  const employees = useSelector((state) => state.objects.objects);
  console.log(employees);

  useEffect(() => {
    dispatch(getEstates(page));
    dispatch(getAllEmployees());
  }, [dispatch])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clear = () => {
    setOpen(false);
    setCurrentID(0);
    setEstateData({
      name: '',
      price: '',
      status: '',
      employeeId: '',
      type: '',
      estateLocalization: {
        city: '',
        street: '',
        number: '',
      },
      estateProperties: {
        description: '',
        constructionYear: '',
        bedrooms: '',
        bathrooms: '',
        kitchen: '',
        builtInWardrobes: '',
        parkingSpaces: '',
        garden: {type: Boolean},
        garage: {type: Boolean},
        pool: {type: Boolean},
        airConditioning: {type: Boolean},
        electricShutters: {type: Boolean},
        underfloorHeating: {type: Boolean},
        gallery: '',
      }  
    })
  };

  const handleOpenDetails = (estate) => {
    setOpenDetails(true);
    setCurrentEstate(estate);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const handleEditOpen = (estate) => {
    setCurrentID(estate._id);
    setEstateData({ ...estate});
    setOpen(true);
  };


  const handleDelete = (id) => {
    dispatch(deleteEstate(id));
    dispatch(getEstates(page));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(currentID !== 0) {
      dispatch(updateEstate(currentID, {...estateData}));
    } else {
      dispatch(createEstate({ ...estateData }));
    }

    clear();
    dispatch(getEstates(page));
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      searchEstate();
    }
  }
  const processExtras= (e, newValue) => {
    const obj = {
      garden: false,
      garage: false,
      pool: false,
      airConditioning: false,
      electricShutters: false,
      underfloorHeating: false,
    }
    newValue.forEach( value => obj[value.name]=true);
    setEstateData({...estateData, estateProperties: {...estateData.estateProperties, ...obj}})
  }

  const searchEstate = () => {
    if(search.trim()) {
      dispatch(getEstatesBySearch({search}));
    } else {
      navigate("/admin/estates");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 8 }}>
        <Dialog open={open} onClose={clear} maxWidth="md" PaperProps={{ style: { background: '#fff' } }}>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <DialogTitle>{currentID !== 0 ? 'Edit' : 'Add'} Estate</DialogTitle>
            <DialogContent className='spaceBetweenFlex flexStart'>
              <div style={{ maxWidth: '50%' }}>
                <p style={{ marginTop: "10px" }}>Add photos to gallery:</p>
                <FileBase type="file" multiple={false} onDone={({base64}) => setEstateData({...estateData, estateProperties: {...estateData.estateProperties, gallery: base64}})}/>

                <TextField variant="outlined" autoFocus margin="dense" id="name" label="Name" type="text" fullWidth value={estateData.name} onChange={(e) => setEstateData({ ...estateData, name: e.target.value })} />

                <FormControl fullWidth margin="dense" autoFocus>
                  <InputLabel htmlFor="price">Price</InputLabel>
                  <OutlinedInput
                    type='number'
                    id="price"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Price"
                    value={estateData.price}
                    onInput={(e)=>{ 
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,9)}}
                    onChange={(e) => setEstateData({ ...estateData, price: e.target.value })}
                  />
                </FormControl>

                <TextField autoFocus margin="dense" id="description" label="Description" type="text" fullWidth variant="outlined" multiline maxRows={4} value={estateData.estateProperties.description} onChange={(e) => setEstateData({...estateData, estateProperties: {...estateData.estateProperties, description: e.target.value }})} />
               
                <div className='spaceBetweenFlex'>
                <Autocomplete
                  disablePortal
                  PaperComponent={({ children }) => (
                    <Paper style={{ background: "white" }}>{children}</Paper>
                  )}
                  id="status"
                  options={statusChoices}
                  value={estateData.status}
                  onChange={(e, newValue)=> setEstateData({ ...estateData, status: newValue })}
                  sx={{ width: '60%' }}
                  renderInput={(params) => <TextField {...params} margin="dense" label="Status" />}
                />

                <Autocomplete
                  disablePortal
                  PaperComponent={({ children }) => (
                    <Paper style={{ background: "white" }}>{children}</Paper>
                  )}
                  id="type"
                  options={typeChoices}
                  value={estateData.type}
                  onChange={(e, newValue)=> setEstateData({ ...estateData, type: newValue })}
                  sx={{ width: '40%', marginLeft: 2 }}
                  renderInput={(params) => <TextField {...params} margin="dense" label="Type" />}
                />
                </div>
                <TextField InputLabelProps={{ shrink: true }} variant="outlined" autoFocus margin="dense" id="constructionYear" label="Year of construction" type="date" value={estateData.estateProperties.constructionYear ? estateData.estateProperties.constructionYear.split('T')[0] : ''} fullWidth onChange={(e) => setEstateData({...estateData, estateProperties: {...estateData.estateProperties, constructionYear: e.target.value}})} />
                <Autocomplete
                  disablePortal
                  PaperComponent={({ children }) => (
                    <Paper style={{ background: "white" }}>{children}</Paper>
                  )}
                  id="employee-id"
                  value={employees.find(option => option._id === estateData.employeeId)}
                  options={employees}
                  getOptionLabel={(option) => option.name}
                  onChange={(e, newValue)=> setEstateData({ ...estateData, employeeId: newValue })}
                  fullWidth
                  renderInput={(params) => <TextField {...params} margin="dense" label="Employee ID" />}
                />

              </div>
              <Divider orientation="vertical" flexItem sx={{ mr: "-1px", margin: 2 }} />
              <div style={{ maxWidth: '50%' }}>
                <Typography>Localization</Typography>

                <TextField variant="outlined" autoFocus margin="dense" id="city" fullWidth label="City" type="text" value={estateData.estateLocalization.city} onChange={(e) => setEstateData({...estateData, estateLocalization: {...estateData.estateLocalization, city: e.target.value }})} />
                <div className='spaceBetweenFlex'>
                  <TextField variant="outlined" autoFocus margin="dense" id="street" label="Street" sx={{ width: '70%' }} type="text" value={estateData.estateLocalization.street} onChange={(e) => setEstateData({...estateData, estateLocalization: {...estateData.estateLocalization, street: e.target.value }})} />
                  <TextField variant="outlined" autoFocus margin="dense" id="number" label="Number" sx={{ width: '30%', marginLeft: 2 }} type="number" value={estateData.estateLocalization.number} onChange={(e) => setEstateData({...estateData, estateLocalization: {...estateData.estateLocalization, number: e.target.value }})} />
                </div>

                <Typography>Features</Typography>

                <div className='spaceBetweenFlex'>
                  <TextField variant="outlined" autoFocus margin="dense" id="bedroooms" label="Bedroooms" sx={{ width: '33%' }} value={estateData.estateProperties.bedrooms} type="number" onInput={(e)=>{ 
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)}} onChange={(e) => setEstateData({...estateData, estateProperties: {...estateData.estateProperties, bedrooms: e.target.value }})} />
                  <TextField variant="outlined" autoFocus margin="dense" id="bathrooms" label="Bathrooms" sx={{ width: '33%', marginLeft: 2 }} value={estateData.estateProperties.bathrooms} type="number" onInput={(e)=>{ 
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)}} onChange={(e) => setEstateData({...estateData, estateProperties: {...estateData.estateProperties, bathrooms: e.target.value }})} />
                  <TextField variant="outlined" autoFocus margin="dense" id="kitchen" label="Kitchen" sx={{ width: '33%', marginLeft: 2 }} value={estateData.estateProperties.kitchen} type="number" onInput={(e)=>{ 
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)}} onChange={(e) => setEstateData({...estateData, estateProperties: {...estateData.estateProperties, kitchen: e.target.value }})} />
                </div>
                <div className='spaceBetweenFlex'>
                  <TextField variant="outlined" autoFocus margin="dense" id="builtInWardrobes" label="Built-in wardrobes" sx={{ width: '50%' }} value={estateData.estateProperties.builtInWardrobes} type="number" onInput={(e)=>{ 
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)}} onChange={(e) => setEstateData({...estateData, estateProperties: {...estateData.estateProperties, builtInWardrobes: e.target.value }})} />
                  <TextField variant="outlined" autoFocus margin="dense" id="parkingSpaces" label="Parking Spaces" sx={{ width: '50%', marginLeft: 2 }} value={estateData.estateProperties.parkingSpaces} type="number" onInput={(e)=>{ 
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)}} onChange={(e) => setEstateData({...estateData, estateProperties: {...estateData.estateProperties, parkingSpaces: e.target.value }})} />
                </div>

                <Autocomplete
                  PaperComponent={({ children }) => (
                    <Paper style={{ background: "white" }}>{children}</Paper>
                  )}
                  multiple   
                  id="extrafeatures"
                  options={options}
                  getOptionLabel={(option) => option.label}
                  value={options.filter(option_ => (estateData.estateProperties ? estateData.estateProperties[option_.name] : false))}
                  onChange={processExtras}
                  fullWidth
                  renderInput={(params) => <TextField {...params} margin="dense" label="Extra features" />}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" onClick={handleClose}>{currentID !== 0 ? 'Edit' : 'Add'} Estate</Button>
            </DialogActions>

          </form>
        </Dialog>

        <Dialog open={openDetails} onClose={handleCloseDetails} maxWidth="md" PaperProps={{ style: { background: '#fff' } }}>
          <DialogTitle>{currentEstate.name}</DialogTitle>
          <DialogContent>
            {currentEstate.estateLocalization ? Object.entries(currentEstate.estateLocalization).map((killme) => (<div key={killme._id}>{killme}</div>)) : 'none'}
            {currentEstate.estateProperties ? Object.entries(currentEstate.estateProperties).map((killme) => (<div key={killme._id}>{killme}</div>)) : 'none'}
          </DialogContent>
        </Dialog>


        <h1>Estates</h1>
        <Box sx={{border: '1px solid rgba(0, 0, 0, 0.12)', padding: '36px', marginTop: '20px' }}>
          <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
            <TextField name="search" varaint="outlined" style={{ width: 'calc(100% - 170px)', margin: 8 }} placeholder='Type to search...' value={search} onChange={(e) => {setSearch(e.target.value)}} onKeyDown={handleKeyDown} />
            <Button variant="contained" style={{ height: '56px', margin: 8 }} onClick={handleClickOpen}>
              Add Estate
            </Button>
          </div>
          <div className="tableRow" style={{ background: '#F8F8F8', marginTop: 8 }}>
            <div className='m8 tableRowDetails' style={{maxWidth: '125px'}}><Typography variant="mdm">Employee ID</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Name</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Price</Typography></div>
            <div className='m8 tableRowDetails' style={{ width: '250px' }}><Typography variant="mdm">Properties</Typography></div>
            <div className='m8 tableRowDetails' style={{ width: '100px' }}><Typography variant="mdm">Status</Typography></div>
            <div className='m8 tableRowDetails' style={{ maxWidth: '100px' }}><Typography variant="mdm">Actions</Typography></div>
          </div>
          {estates.map((estate) => (
            <div key={estate._id} className="tableRow">
              <div className='m8 tableRowDetails' style={{maxWidth: '125px', overflow: 'hidden'}}><Typography variant="md">{estate.employeeId}</Typography></div>
              <div className='m8 tableRowDetails'><Typography variant="md">{estate.name}</Typography></div>
              <div className='m8 tableRowDetails'><Typography variant="md">$ {estate.price}</Typography></div>
              <div className='m8 tableRowDetails' style={{ width: '250px' }}><Button onClick={() => handleOpenDetails(estate)}><Typography variant="mdm" color="secondary.dark">See properties</Typography></Button></div>
              <div className='m8 tableRowDetails' style={{ width: '100px' }}><Typography variant="md">{estate.status}</Typography></div>
              <div className='m8 tableRowDetails' style={{ maxWidth: '100px', display: 'flex'}}>
                <div className="actionButton" onClick={() => handleEditOpen(estate)}><EditOutlinedIcon/></div> 
                <div className="actionButton delete" onClick={() => handleDelete(estate._id)}><DeleteOutlineOutlinedIcon/></div>
              </div>
            </div>
          ))}
          <Box sx={{paddingTop: 4}}>
            <Pagination page={page} type="estates"/>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AdminEstates