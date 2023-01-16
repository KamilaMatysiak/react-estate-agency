import React, {useState, useEffect} from 'react'
import theme from '../../Theme'
import {Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, CardMedia, ThemeProvider, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { createEmployee, getEmployees, getEmployeesBySearch } from '../../../actions/employees';
import FileBase from 'react-file-base64';
import { Container } from '@mui/system';
import Pagination from '../../Pagination'
import { useNavigate, useLocation } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Employees = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');
  const [open, setOpen] = React.useState(false);
  const [employeeData, setEmployeeData] = useState({
    avatar: '',
    username: '',
    name: '',
    email: '',
    phonenumber: '',
    password: ''
  });
  const [currentID, setCurrentID] = useState(0);
  const {objects} = useSelector((state) => state.objects);

  useEffect(() => {
    dispatch(getEmployees());
  }, [currentID, dispatch])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createEmployee({...employeeData}));
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      searchEmployee();
    }
  }

  const searchEmployee = () => {
    if(search.trim()) {
      dispatch(getEmployeesBySearch({search}));
    } else {
      navigate("/admin/employees");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{marginTop: 8}}>

      <Dialog open={open} onClose={handleClose} PaperProps={{style: {background: '#fff'}}}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit} style={{backgroundColor: "#fff"}}>
          <DialogTitle>Add Employee</DialogTitle>
          <DialogContent>
            <FileBase type="file" multiple={false} onDone={({base64}) => setEmployeeData({...employeeData, avatar: base64})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="username" label="Username" type="text" fullWidth onChange={(e)=> setEmployeeData({...employeeData, username: e.target.value})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="name" label="Name" type="text" fullWidth onChange={(e)=> setEmployeeData({...employeeData, name: e.target.value})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth onChange={(e)=> setEmployeeData({...employeeData, email: e.target.value})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="phoneNumber" label="Phone Number" type="text" fullWidth onChange={(e)=> setEmployeeData({...employeeData, phoneNumber: e.target.value})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="password" label="Password" type="pasword" fullWidth onChange={(e)=> setEmployeeData({...employeeData, password: e.target.value})}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" onClick={handleClose}>Add Employee</Button>
            </DialogActions>
          </form>
      </Dialog>

      <h1>Employees</h1>
        <Box sx={{border: '1px solid rgba(0, 0, 0, 0.12)', padding: '36px', marginTop: '20px' }}>
          <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
            <TextField name="search" varaint="outlined" style={{ width: 'calc(100% - 185px)', margin: 8 }} placeholder='Type to search...' value={search} onChange={(e) => {setSearch(e.target.value)}} onKeyDown={handleKeyDown} />
            <Button variant="contained" style={{ height: '56px', margin: 8 }} onClick={handleClickOpen}>
              Add Employee
            </Button>
          </div>

          <div className="tableRow" style={{background: '#F8F8F8', marginTop: 8}}>
           <div className='m8 tableRowDetails' style={{maxWidth: '16px'}}></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Name</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Username</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Email</Typography></div>
            <div className='m8 tableRowDetails' style={{maxWidth: '100px'}}><Typography variant="mdm">Phone</Typography></div>
            <div className='m8 tableRowDetails' style={{width: '100px'}}><Typography variant="mdm">Actions</Typography></div>
          </div>

          {objects.map((employee) => (
            <div key={employee._id} className="tableRow">
              <CardMedia style={{width: 32, height: 32, margin: 16, borderRadius: 180}} image={employee.avatar}/>
              <div className='m8 tableRowDetails'><Typography variant="mdm">{employee.name}</Typography></div>
              <div className='m8 tableRowDetails'><Typography variant="md">{employee.username}</Typography></div>
              <div className='m8 tableRowDetails'><Typography variant="md">{employee.email}</Typography></div>
              <div className='m8 tableRowDetails' style={{width: '100px'}}><Typography variant="md">{employee.phoneNumber}</Typography></div>
              <div className='m8 tableRowDetails' style={{width: '100px'}}><EditOutlinedIcon/> <DeleteOutlineOutlinedIcon/></div>
            </div>
          ))}
          <Box sx={{paddingTop: 4}}>
            <Pagination page={page} type="employees"/>
          </Box>
      </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Employees