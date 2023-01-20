import React, { useState, useEffect } from 'react'
import theme from '../../Theme'
import { Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider, Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createTenant, getTenants, getTenantsBySearch, updateTenant, deleteTenant } from '../../../actions/tenants';
import { Container } from '@mui/system';
import Pagination from '../../Pagination'
import { useNavigate, useLocation } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Tenants = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [tenantData, setTenantData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    terminationDate: ''
  });
  const [currentID, setCurrentID] = useState(0);
  const { objects } = useSelector((state) => state.objects);

  useEffect(() => {
    console.log(Number(page));
    dispatch(getTenants(page));
  }, [currentID, dispatch])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleEditOpen = (t) => {
    setCurrentID(t._id);
    setTenantData({ ...t});
    setOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteTenant(id));
    dispatch(getTenants(page));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log(currentID);
    if(currentID !== 0) {
      console.log("edit");
      dispatch(updateTenant(currentID, {...tenantData}));
    } 
    else {
      console.log('add');
      dispatch(createTenant({...tenantData}));
    } 

    clear();

    dispatch(getTenants(page));
  }

  const clear = () => {
    setOpen(false);
    setTenantData({name: '', email: '', phonenumber: '', terminationDate: ''});
    setCurrentID(0);
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      searchTenant();
    }
  }

  const searchTenant = () => {
    if(search.trim()) {
      dispatch(getTenantsBySearch({search}));
    } else {
      navigate("/admin/tenants");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{marginTop: 8}}>

        <Dialog open={open} onClose={clear} PaperProps={{ style: { background: '#fff' } }}>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <DialogTitle>{currentID !== 0 ? 'Edit' : 'Add'} Tenant</DialogTitle>
            <DialogContent>
              <TextField variant="outlined" autoFocus margin="dense" id="name" label="Name" type="text" fullWidth value={tenantData.name} onChange={(e) => setTenantData({ ...tenantData, name: e.target.value })} />
              <TextField variant="outlined" autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth value={tenantData.email} onChange={(e) => setTenantData({ ...tenantData, email: e.target.value })} />
              <TextField variant="outlined" autoFocus margin="dense" id="phoneNumber" label="Phone Number" type="text" fullWidth value={tenantData.phoneNumber} onChange={(e) => setTenantData({ ...tenantData, phoneNumber: e.target.value })} />
              <TextField InputLabelProps={{ shrink: true }} variant="outlined" autoFocus margin="dense" id="terminationDate" label="Termination date" type="date" fullWidth value={tenantData.terminationDate} onChange={(e) => setTenantData({ ...tenantData, terminationDate: e.target.value })} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" onClick={handleClose}>{currentID !== 0 ? 'Edit' : 'Add'} Tenant</Button>
            </DialogActions>
          </form>
        </Dialog>


        <h1>Tenants</h1>
        <Box sx={{border: '1px solid rgba(0, 0, 0, 0.12)', padding: '36px', marginTop: '20px' }}>
          <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
            <TextField name="search" varaint="outlined" style={{ width: 'calc(100% - 170px)', margin: 8 }} placeholder='Type to search...' value={search} onChange={(e) => {setSearch(e.target.value)}} onKeyDown={handleKeyDown} />
            <Button variant="contained" style={{ height: '56px', margin: 8 }} onClick={handleClickOpen}>
              Add Tenant
            </Button>
          </div>
          <div className="tableRow" style={{background: '#F8F8F8', marginTop: 8}}>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Name</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Email</Typography></div>
            <div className='m8 tableRowDetails' style={{maxWidth: '100px'}}><Typography variant="mdm">Phone</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Termination</Typography></div>
            <div className='m8 tableRowDetails' style={{width: '100px'}}><Typography variant="mdm">Actions</Typography></div>
          </div>
        
          {objects.map((tenant) => (
            <div key={tenant._id} className="tableRow">
              <div className='m8 tableRowDetails'><Typography variant="mdm">{tenant.name}</Typography></div>
              <div className='m8 tableRowDetails'><Typography variant="md">{tenant.email}</Typography></div>
              <div className='m8 tableRowDetails' style={{maxWidth: '100px'}}><Typography variant="mdm">{tenant.phoneNumber}</Typography></div>
              <div className='m8 tableRowDetails'><Typography variant="md">{tenant.terminationDate}</Typography></div>
              <div className='m8 tableRowDetails' style={{width: '100px', display: 'flex'}}><div className="actionButton" onClick={() => handleEditOpen(tenant)}><EditOutlinedIcon/></div> <div className="actionButton delete" onClick={() => handleDelete(tenant._id)}><DeleteOutlineOutlinedIcon/></div></div>
            </div>
          ))}
          <Box sx={{paddingTop: 4}}>
            <Pagination page={page} type="tenants"/>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Tenants