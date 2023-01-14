import React, { useState, useEffect } from 'react'
import theme from '../../Theme'
import { Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createTenant, getTenants, getTenantsBySearch } from '../../../actions/tenants';
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

  let tableRow = {
    width: '250px', 
    maxWidth: '300px', 
    textAlign: 'left'
  }

  useEffect(() => {
    console.log(Number(page));
    dispatch(getTenants(page));
  }, [currentID, dispatch])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTenant({ ...tenantData }));
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
      <Container sx={{ marginTop: 8 }}>

        <Dialog open={open} onClose={handleClose} PaperProps={{ style: { background: '#fff' } }}>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <DialogTitle>Add Tenant</DialogTitle>
            <DialogContent>
              <TextField variant="outlined" autoFocus margin="dense" id="name" label="Name" type="text" fullWidth onChange={(e) => setTenantData({ ...tenantData, name: e.target.value })} />
              <TextField variant="outlined" autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth onChange={(e) => setTenantData({ ...tenantData, email: e.target.value })} />
              <TextField variant="outlined" autoFocus margin="dense" id="phoneNumber" label="Phone Number" type="text" fullWidth onChange={(e) => setTenantData({ ...tenantData, phoneNumber: e.target.value })} />
              <TextField InputLabelProps={{ shrink: true }} variant="outlined" autoFocus margin="dense" id="terminationDate" label="Termination date" type="date" fullWidth onChange={(e) => setTenantData({ ...tenantData, terminationDate: e.target.value })} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" onClick={handleClose}>Add Tenant</Button>
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
          <div style={{ width: '100%', background: '#F8F8F8', marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='m8' style={tableRow}><b>Name</b></div>
            <div className='m8' style={tableRow}>Email</div>
            <div className='m8' style={{tableRow, maxWidth: '100px'}}>Phone</div>
            <div className='m8' style={tableRow}>Termination</div>
            <div className='m8' style={{tableRow, width: '100px'}}>Actions</div>
          </div>
        
          {objects.map((tenant) => (
            <div key={tenant._id} style={{ width: '100%', background: '#e3e3e3',  marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className='m8' style={tableRow}><b>{tenant.name}</b></div>
              <div className='m8' style={tableRow}>{tenant.email}</div>
              <div className='m8' style={{tableRow, maxWidth: '100px'}}>{tenant.phoneNumber}</div>
              <div className='m8' style={tableRow}>{tenant.terminationDate}</div>
              <div className='m8' style={{tableRow, width: '100px'}}>
              <EditOutlinedIcon/> <DeleteOutlineOutlinedIcon/>
              </div>
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