import React, {useState, useEffect} from 'react'
import theme from '../../Theme'
import {Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, CardMedia, ThemeProvider} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { createEmployee, getEmployees } from '../../../actions/employees';
import FileBase from 'react-file-base64';
import { Container } from '@mui/system';

const Employees = () => {
  const dispatch = useDispatch();
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
  const {employees} = useSelector((state) => state.employees);

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

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{marginTop: 8}}>
      <div style={{float: 'right', marginBottom: 8}}>
        <TextField varaint="outlined" placeholder='There will be search'/>
      <Button variant="contained" style={{height: '56px'}} onClick={handleClickOpen}>
        Add Employee
      </Button>
      </div>
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


      <Box className="maxWidthXl">
        {employees.map((employee) => (
          <div key={employee._id} style={{width: '100%', background: '#e3e3e3', margin: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
             <CardMedia style={{width: 32, height: 32, margin: 16, borderRadius: 180}} image={employee.avatar}/>
            <div className='m8' style={{width: '200px', maxWidth: '300px', textAlign: 'left'}}>{employee.username}</div>
            <div className='m8' style={{width: '200px', maxWidth: '300px', textAlign: 'left'}}><b>{employee.name}</b></div>
            <div className='m8' style={{width: '200px', maxWidth: '300px', textAlign: 'left'}}>{employee.email}</div>
            <div className='m8' style={{width: '200px', maxWidth: '300px', textAlign: 'left'}}>{employee.phoneNumber}</div>
            <div className='m8' style={{width: '200px', maxWidth: '200px', textAlign: 'left'}}>EDIT DELETE</div>
          </div>
        ))}
      </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Employees