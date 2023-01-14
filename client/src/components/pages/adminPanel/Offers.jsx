import React, { useState, useEffect } from 'react'
import theme from '../../Theme'
import { Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createOffer, getOffers, getOffersBySearch } from '../../../actions/offers';
import { Container } from '@mui/system';
import Pagination from '../../Pagination'
import { useNavigate, useLocation } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Offers = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');
  const [currentID, setCurrentID] = useState(0);
  const { objects } = useSelector((state) => state.objects);

  let tableRow = {
    width: '250px', 
    maxWidth: '300px', 
    textAlign: 'left'
  }

  useEffect(() => {
    console.log(Number(page));
    dispatch(getOffers(page));
  }, [currentID, dispatch])

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      searchOffer();
    }
  }

  const searchOffer = () => {
    if(search.trim()) {
      dispatch(getOffersBySearch({search}));
    } else {
      navigate("/admin/offers");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 8 }}>
        <h1>Offers</h1>
        <Box sx={{border: '1px solid rgba(0, 0, 0, 0.12)', padding: '36px', marginTop: '20px' }}>
          <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
            <TextField name="search" varaint="outlined" style={{ width: '100%', margin: 8 }} placeholder='Type to search...' value={search} onChange={(e) => {setSearch(e.target.value)}} onKeyDown={handleKeyDown} />
          </div>
          <div style={{ width: '100%', background: '#F8F8F8', marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='m8' style={tableRow}><b>Name</b></div>
            <div className='m8' style={tableRow}>Email</div>
            <div className='m8' style={{tableRow, maxWidth: '100px'}}>Message</div>
            <div className='m8' style={tableRow}>Estate Id</div>
            <div className='m8' style={{tableRow, width: '100px'}}>Actions</div>
          </div>
        
          {objects.map((Offer) => (
            <div key={Offer._id} style={{ width: '100%', background: '#e3e3e3',  marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className='m8' style={tableRow}><b>{Offer.name}</b></div>
              <div className='m8' style={tableRow}>{Offer.email}</div>
              <div className='m8' style={{tableRow, maxWidth: '100px'}}>{Offer.message}</div>
              <div className='m8' style={tableRow}>{Offer.estateId}</div>
              <div className='m8' style={{tableRow, width: '100px'}}>
              <EditOutlinedIcon/> <DeleteOutlineOutlinedIcon/>
              </div>
            </div>
          ))}
          <Box sx={{paddingTop: 4}}>
            <Pagination page={page} type="offers"/>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Offers