import React, {useState, useEffect} from 'react'
import {Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { createEmployee, getEmployees } from '../../../actions/employees';

const Employees = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [employeeData, setEmployeeData] = useState({
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
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Employee
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <DialogTitle>Add Employee</DialogTitle>
          <DialogContent>
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
          <div key={employee._id} className="m8 spaceBetweenFlex" style={{width: '100%', background: '#e3e3e3'}}>
            <div>{employee.username}</div>
            <div><b>{employee.name}</b></div>
            <div>{employee.email}</div>
            <div>{employee.phoneNumber}</div>
          </div>
        ))}
      </Box>
    </div>
  );
}

export default Employees