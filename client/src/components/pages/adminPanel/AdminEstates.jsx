import React, { useState, useEffect } from 'react'
import theme from '../../Theme'
import { Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createEstate, getEstates } from '../../../actions/estates';
import { Container } from '@mui/system';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const AdminEstates = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [estateData, setEstateData] = useState({
    name: '',
    price: '',
    status:'',
    employee: '',
    localization:'',
    properties: '',
  })
  const [currentID, serCurrentID] = useState(0);
  const { estates } = useSelector((state) => state.estates);

  useEffect(()=>{
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

    dispatch(createEstate({...estateData}));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 8 }}>

        <Dialog open={open} onClose={handleClose} PaperProps={{ style: { background: '#fff' } }}>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <DialogTitle>Add Estate</DialogTitle>
            <DialogContent>
              <TextField variant="outlined" autoFocus margin="dense" id="name" label="Name" type="text" fullWidth onChange={(e) => setEstateData({ ...estateData, name: e.target.value })} />
              <TextField variant="outlined" autoFocus margin="dense" id="price" label="Price" type="number" fullWidth onChange={(e) => setEstateData({ ...estateData, price: e.target.value })} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" onClick={handleClose}>Add Estate</Button>
            </DialogActions>
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
          <div className="tableRow" style={{background: '#F8F8F8', marginTop: 8}}>
          <div className='m8 tableRowDetails'><Typography variant="mdm">Employee ID</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Name</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Price</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Properties</Typography></div>
            <div className='m8 tableRowDetails' style={{width: '100px'}}><Typography variant="mdm">Actions</Typography></div>
          </div>
          {estates.map((estate) => (
            <div key={estate._id} className="tableRow">
              <div className='m8 tableRowDetails'><Typography variant="md">{estate.employee}</Typography></div>
              <div className='m8 tableRowDetails'><Typography variant="md">{estate.name}</Typography></div>
              <div className='m8 tableRowDetails'><Typography variant="md">{estate.price}</Typography></div>
              <div className='m8 tableRowDetails'><Typography variant="mdm" color="secondary.dark">See properties</Typography></div>
              <div className='m8 tableRowDetails' style={{width: '100px'}}><EditOutlinedIcon/> <DeleteOutlineOutlinedIcon/></div>
            </div>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AdminEstates