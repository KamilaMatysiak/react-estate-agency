import React, {useState, useEffect} from 'react'
import theme from '../../Theme'
import {Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { createTenant, getTenants } from '../../../actions/tenants';
import { Container } from '@mui/system';

const Tenants = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [tenantData, setTenantData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    terminationDate: ''
  });
  const [currentID, setCurrentID] = useState(0);
  const {tenants} = useSelector((state) => state.tenants);

  useEffect(() => {
    dispatch(getTenants());
  }, [currentID, dispatch])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTenant({...tenantData}));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{marginTop: 8}}>
      <div style={{float: 'right', marginBottom: 8}}>
        <TextField varaint="outlined" placeholder='There will be search'/>
      <Button variant="contained" style={{height: '56px'}} onClick={handleClickOpen}>
        Add Tenant
      </Button>
      </div>
      <Dialog open={open} onClose={handleClose} PaperProps={{style: {background: '#fff'}}}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <DialogTitle>Add Tenant</DialogTitle>
          <DialogContent>
            <TextField variant="outlined" autoFocus margin="dense" id="name" label="Name" type="text" fullWidth onChange={(e)=> setTenantData({...tenantData, name: e.target.value})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth onChange={(e)=> setTenantData({...tenantData, email: e.target.value})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="phoneNumber" label="Phone Number" type="text" fullWidth onChange={(e)=> setTenantData({...tenantData, phoneNumber: e.target.value})}/>
            <TextField InputLabelProps={{ shrink: true }} variant="outlined" autoFocus margin="dense" id="terminationDate" label="Termination date" type="date" fullWidth onChange={(e)=> setTenantData({...tenantData, terminationDate: e.target.value})}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" onClick={handleClose}>Add Tenant</Button>
            </DialogActions>
          </form>
      </Dialog>


      <Box className="maxWidthXl">
        {tenants.map((tenant) => (
          <div key={tenant._id} style={{width: '100%', background: '#e3e3e3', margin: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div className='m8' style={{width: '200px', maxWidth: '300px', textAlign: 'left'}}><b>{tenant.name}</b></div>
            <div className='m8' style={{width: '200px', maxWidth: '300px', textAlign: 'left'}}>{tenant.email}</div>
            <div className='m8' style={{width: '200px', maxWidth: '300px', textAlign: 'left'}}>{tenant.phoneNumber}</div>
            <div className='m8' style={{width: '200px', maxWidth: '300px', textAlign: 'left'}}>{tenant.terminationDate}</div>
            <div className='m8' style={{width: '200px', maxWidth: '200px', textAlign: 'left'}}>EDIT DELETE</div>
          </div>
        ))}
      </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Tenants