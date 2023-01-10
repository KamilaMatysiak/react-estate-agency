import React, { useState, useEffect } from 'react'
import theme from '../../Theme'
import { Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider, Grid, Divider, Autocomplete } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createEstate, getEstates } from '../../../actions/estates';
import { Container } from '@mui/system';

const AdminEstates = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [estateData, setEstateData] = useState({
    name: '',
    price: '',
    status: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createEstate({ ...estateData }));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 8 }}>
        <Dialog open={open} onClose={handleClose} PaperProps={{ style: { background: '#fff' } }}>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2} columns={40}>
              <Grid item xs={20}>
                <DialogTitle>Add Estate</DialogTitle>
                <DialogContent>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    fullWidth
                    renderInput={(params) => <TextField {...params} label="Employee ID" />}
                  />
                  <TextField variant="outlined" autoFocus margin="dense" id="name" label="Name" type="text" fullWidth onChange={(e) => setEstateData({ ...estateData, name: e.target.value })} />
                  <TextField variant="outlined" autoFocus margin="dense" id="price" label="Price" type="number" fullWidth onChange={(e) => setEstateData({ ...estateData, price: e.target.value })} />
                  <TextField InputLabelProps={{ shrink: true }} variant="outlined" autoFocus margin="dense" id="contructionYear" label="Year of construction" type="date" fullWidth/>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit" variant="contained" onClick={handleClose}>Add Estate</Button>
                </DialogActions>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ mr: "-1px" }} />
              <Grid item xs={20}>
                <DialogTitle sx={{ fontSize: 15 }}>Add Estate properties</DialogTitle>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField variant="outlined" autoFocus id="price" label="Price" type="number" onChange={(e) => setEstateData({ ...estateData, price: e.target.value })} />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField variant="outlined" autoFocus id="price" label="Price" type="number" onChange={(e) => setEstateData({ ...estateData, price: e.target.value })} />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField variant="outlined" autoFocus id="price" label="Price" type="number" onChange={(e) => setEstateData({ ...estateData, price: e.target.value })} />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField variant="outlined" autoFocus id="price" label="Price" type="number" onChange={(e) => setEstateData({ ...estateData, price: e.target.value })} />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField variant="outlined" autoFocus id="price" label="Price" type="number" onChange={(e) => setEstateData({ ...estateData, price: e.target.value })} />
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