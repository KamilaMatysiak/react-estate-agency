import React, { useState, useEffect } from 'react'
import theme from '../../Theme'
import { FormHelperText, OutlinedInput, InputAdornment, InputLabel, FormControl, Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider, Grid, Divider, Autocomplete, DialogContentText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createEstate, getEstates } from '../../../actions/estates';
import { Container } from '@mui/system';



const AdminEstates = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [innerOpen, setInnerOpen] = React.useState(false);
  const [inner2Open, setInner2Open] = React.useState(false);
  const [estateData, setEstateData] = useState({
    name: '',
    price: '',
    status: '',
    employee: '',
    bathrooms: '',
  })

  const [currentID, serCurrentID] = useState(0);
  const { estates } = useSelector((state) => state.estates);

  useEffect(() => {
    dispatch(getEstates());
  }, [currentID, dispatch])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInnerClickOpen = () => {
    setInnerOpen(true);
  };

  const handleInnerClose = () => {
    setInnerOpen(false);
  };

  const handleInner2ClickOpen = () => {
    setInner2Open(true);
  };

  const handleInner2Close = () => {
    setInner2Open(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createEstate({ ...estateData }));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 8 }}>
        <Dialog open={open} onClose={handleClose} maxWidth='sm' PaperProps={{ style: { background: '#fff' } }}>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2} columns={41}>
              <Grid item xs={20}>
                <DialogTitle>Add Estate</DialogTitle>
                <DialogContent>
                  <Autocomplete
                    disablePortal
                    id="employeeId"
                    fullWidth
                    renderInput={(params) => <TextField {...params} label="Employee ID" />}
                  />
                  <TextField variant="outlined" autoFocus margin="dense" id="name" label="Name" type="text" fullWidth onChange={(e) => setEstateData({ ...estateData, name: e.target.value })} />
                  <FormControl fullWidth margin="dense" autoFocus>
                    <InputLabel htmlFor="price">Price</InputLabel>
                    <OutlinedInput
                      type='number'
                      id="price"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Price"
                      onChange={(e) => setEstateData({ ...estateData, price: e.target.value })}
                    />
                  </FormControl>
                  <TextField InputLabelProps={{ shrink: true }} variant="outlined" autoFocus margin="dense" id="contructionYear" label="Year of construction" type="date" fullWidth onChange={(e) => setEstateData({ ...estateData, contructionYear: e.target.value })} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit" variant="contained" onClick={handleClose}>Add Estate</Button>
                </DialogActions>
              </Grid>
              <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
              <Grid item xs={20} >
                <DialogTitle sx={{ fontSize: 15 }}>Add Estate properties</DialogTitle>
                <Grid container spacing={2} >
                  <Grid item xs={4} >
                    <FormControl variant="outlined">
                      <FormHelperText id="bedrooms" sx={{ margin: '0' }}>Bedrooms</FormHelperText>
                      <OutlinedInput
                        id="Bedrooms"
                        autoFocus
                        label="Bedroooms"
                        type="number"
                        onChange={(e) => setEstateData({ ...estateData, bedrooms: e.target.value })}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="outlined">
                      <FormHelperText id="bathrooms" sx={{ margin: '0' }}>Bathrooms</FormHelperText>
                      <OutlinedInput
                        id="bathrooms"
                        autoFocus
                        label="Bathrooms"
                        type="number"
                        onChange={(e) => setEstateData({ ...estateData, bathrooms: e.target.value })}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="outlined">
                      <FormHelperText id="kitchen" sx={{ margin: '0' }}>Kitchen</FormHelperText>
                      <OutlinedInput
                        id="kitchen"
                        autoFocus
                        label="Kitchen"
                        type="number"
                        onChange={(e) => setEstateData({ ...estateData, kitchen: e.target.value })}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="outlined">
                      <FormHelperText id="builtInWardrobes" sx={{ margin: '0' }}>Built-in wardrobes</FormHelperText>
                      <OutlinedInput
                        id="builtInWardrobes"
                        autoFocus
                        label="builtInWardrobes"
                        type="number"
                        onChange={(e) => setEstateData({ ...estateData, builtInWardrobes: e.target.value })}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="outlined">
                      <FormHelperText id="parkingSpaces" sx={{ margin: '0' }}>Parking Spaces</FormHelperText>
                      <OutlinedInput
                        id="parkingSpaces"
                        autoFocus
                        label="parkingSpaces"
                        type="number"
                        onChange={(e) => setEstateData({ ...estateData, parkingSpaces: e.target.value })}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      disablePortal
                      id="employeeId"
                      fullWidth
                      renderInput={(params) => <TextField {...params} label="Employee ID" />}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="outlined" onClick={handleInner2ClickOpen}>
                      Localization
                    </Button>
                    <Dialog open={inner2Open} onClose={handleInner2Close} fullWidth PaperProps={{ style: { background: '#fff' } }}>
                      <DialogTitle>Localization info</DialogTitle>
                      <DialogContent>
                        <TextField variant="outlined" autoFocus margin="dense" id="city" fullWidth label="City" type="text" onChange={(e) => setEstateData({ ...estateData, city: e.target.value })} />
                        <TextField variant="outlined" autoFocus margin="dense" id="street" fullWidth label="Street" type="text" onChange={(e) => setEstateData({ ...estateData, street: e.target.value })} />
                        <TextField variant="outlined" autoFocus margin="dense" id="number" label="Number" type="number" onChange={(e) => setEstateData({ ...estateData, number: e.target.value })} />
                      </DialogContent>
                      <DialogActions>
                        <Button type="submit" onClick={handleInner2Close}>Add Localization info</Button>
                      </DialogActions>
                    </Dialog>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="outlined" onClick={handleInnerClickOpen}>
                      Description
                    </Button>
                    <Dialog open={innerOpen} onClose={handleInnerClose} fullWidth PaperProps={{ style: { background: '#fff' } }}>
                      <DialogTitle>Description</DialogTitle>
                      <DialogContent>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="description"
                          label="Write description"
                          type="text"
                          fullWidth
                          variant="outlined"
                          multiline
                          rows={4}
                          onChange={(e) => setEstateData({ ...estateData, description: e.target.value })}
                        />
                        <p style={{ marginTop: "10px" }}>Add photos to gallery:</p>
                        <input type="file" style={{ width: '250px', margin: '5px 0px 10px' }} accept="image/png, image/jpeg, image/jpg" onChange={(e) => setEstateData({ ...estateData, gallery: e.target.value })} />
                      </DialogContent>
                      <DialogActions>
                        <Button type="submit" onClick={handleInnerClose}>Add description</Button>
                      </DialogActions>
                    </Dialog>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Dialog>


        <h1>Estates</h1>
        <Box sx={{ height: '450px', border: '1px solid rgba(0, 0, 0, 0.12)', padding: '36px', overflowY: 'scroll', overflow: 'auto', marginTop: '20px' }}>
          <div style={{ marginBottom: 8 }}>
            <TextField varaint="outlined" style={{ width: 'calc(100% - 170px)', margin: 8 }} placeholder='There will be search' />
            <Button variant="contained" style={{ height: '56px', margin: 8 }} onClick={handleClickOpen}>
              Add Estate
            </Button>
          </div>
          <div style={{ width: '100%', background: '#F8F8F8', marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='m8' style={{ width: '200px', maxWidth: '300px', textAlign: 'left' }}><b>Name</b></div>
            <div className='m8' style={{ width: '200px', maxWidth: '300px', textAlign: 'left' }}>Price</div>
            <div className='m8' style={{ width: '200px', maxWidth: '300px', textAlign: 'left' }}>Employee</div>
            <div className='m8' style={{ width: '200px', maxWidth: '300px', textAlign: 'left' }}>Properties</div>
            <div className='m8' style={{ width: '200px', maxWidth: '200px', textAlign: 'left' }}>Actions</div>
          </div>
          {estates.map((estate) => (
            <div key={estate._id} style={{ width: '100%', background: '#e3e3e3', marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className='m8' style={{ width: '200px', maxWidth: '300px', textAlign: 'left' }}><b>{estate.name}</b></div>
              <div className='m8' style={{ width: '200px', maxWidth: '300px', textAlign: 'left' }}>{estate.price}</div>
              <div className='m8' style={{ width: '200px', maxWidth: '300px', textAlign: 'left' }}>{estate.employee}</div>
              <div className='m8' style={{ width: '200px', maxWidth: '300px', textAlign: 'left' }}>properties</div>
              <div className='m8' style={{ width: '200px', maxWidth: '200px', textAlign: 'left' }}>EDIT DELETE</div>
            </div>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AdminEstates