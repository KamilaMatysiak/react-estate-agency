import React, {useState, useEffect} from 'react'
import theme from '../../Theme'
import {Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, CardMedia, ThemeProvider, Typography, Checkbox, FormControlLabel} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { createEmployee, getEmployees, getEmployeesBySearch, deleteEmployee, updateEmployee } from '../../../actions/employees';
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
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [currentID, setCurrentID] = useState(0);
  const [employeeData, setEmployeeData] = useState({
    avatar: '',
    username: '',
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    isAdmin: false,
  });

  const {objects} = useSelector((state) => state.objects);

  useEffect((page) => {
    dispatch(getEmployees(page));
  }, [dispatch])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleEditOpen = (e) => {
    setCurrentID(e._id);
    setEmployeeData({ ...e});
    setOpen(true);
    console.log(employeeData.password);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
    dispatch(getEmployees(page));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("słyszysz mnie?");
    console.log(employeeData.password);

    if(currentID !== 0) {
      dispatch(updateEmployee(currentID, {...employeeData}));
    } 
    else {
      dispatch(createEmployee({...employeeData}));
    } 

    clear();
    dispatch(getEmployees(page));
  }

  const clear = () => {
    setEmployeeData({ avatar: '', username: '', name: '', email: '', phoneNumber: '', password: '', isAdmin: false});
    setCurrentID(0);
    setEditPassword(false);
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
      
      <Container maxWidth="lg" sx={{ marginTop: '32px' }}>

      <Dialog open={open} onClose={handleClose} PaperProps={{style: {background: '#fff'}}}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit} style={{backgroundColor: "#fff"}}>
          <DialogTitle>{currentID !== 0 ? 'Edit' : 'Add'} Employee</DialogTitle>
          <DialogContent>
            {user.isAdmin && <div><FormControlLabel control={
              <Checkbox variant="outlined" autoFocus margin="dense" id="isAdmin" checked={employeeData.isAdmin} onChange={(e)=> setEmployeeData({...employeeData, isAdmin: e.target.checked})}/>
            } label="Admin" /></div>}
            <FileBase type="file" multiple={false} onDone={({base64}) => setEmployeeData({...employeeData, avatar: base64})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="username" label="Username" type="text" disabled={!user.isAdmin} fullWidth value={employeeData.username} onChange={(e)=> setEmployeeData({...employeeData, username: e.target.value})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="name" label="Name" type="text" fullWidth value={employeeData.name} onChange={(e)=> setEmployeeData({...employeeData, name: e.target.value})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth value={employeeData.email} onChange={(e)=> setEmployeeData({...employeeData, email: e.target.value})}/>
            <TextField variant="outlined" autoFocus margin="dense" id="phoneNumber" label="Phone Number" type="text" fullWidth value={employeeData.phoneNumber} onChange={(e)=> setEmployeeData({...employeeData, phoneNumber: e.target.value})}/>
            <Button variant="outlined" onClick={() => setEditPassword(!editPassword)}>Change Password</Button>
            {(editPassword) ? <TextField variant="outlined" autoFocus margin="dense" id="password" label="Password" type="password" fullWidth onChange={(e)=> setEmployeeData({...employeeData, password: e.target.value})}/> : <></>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" onClick={handleClose}>{currentID == 0 ? 'Add' : 'Edit'} Employee</Button>
            </DialogActions>
          </form>
      </Dialog>

      <Typography variant="lgm">Employees</Typography>
        <Box className="tableBox">
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
              <CardMedia style={{width: '36px', height: '32px', margin: '16px', borderRadius: 360}} image={employee.avatar}/>
              <div className='m4 tableRowDetails'><Typography variant="mdm">{employee.name}</Typography></div>
              <div className='m4 tableRowDetails'><Typography variant="md">{employee.isAdmin ? <b>{employee.username}</b>: employee.username}</Typography></div>
              <div className='m4 tableRowDetails'><Typography variant="md">{employee.email}</Typography></div>
              <div className='m4 tableRowDetails' style={{width: '100px'}}><Typography variant="md">{employee.phoneNumber}</Typography></div>
              <div className='m4 tableRowDetails' style={{width: '100px', display: 'flex'}}>
              {(user.employee.username === employee.username || user.isAdmin) && <div className="actionButton" onClick={() => handleEditOpen(employee)}><EditOutlinedIcon/></div> }
              {user.isAdmin && <div className="actionButton delete" onClick={() => handleDelete(employee._id)}><DeleteOutlineOutlinedIcon/></div>}</div>
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