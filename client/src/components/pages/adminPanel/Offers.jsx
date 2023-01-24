import React, { useState, useEffect } from 'react'
import theme from '../../Theme'
import { Box, TextField, Typography, ThemeProvider} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOffer, getOffers, getOffersBySearch } from '../../../actions/offers';
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

  useEffect(() => {
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

  const handleDelete = (id) => {
    dispatch(deleteOffer(id));
    dispatch(getOffers(page));
  }

  const openEstate = (id) => {
    if(id) navigate(`/estate/${id}`);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container  maxWidth="lg" sx={{ marginTop: '32px' }}>
        <Typography variant="lgm">Offers</Typography>
        <Box className="tableBox">
          <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
            <TextField name="search" varaint="outlined" style={{ width: '100%', margin: 8 }} placeholder='Type to search...' value={search} onChange={(e) => {setSearch(e.target.value)}} onKeyDown={handleKeyDown} />
          </div>
          <div className="tableRow" style={{background: '#F8F8F8', marginTop: 8}}>
            <div className='m8 tableRowDetails' style={{maxWidth: '100px'}}><Typography variant="mdm">Estate Id</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Name</Typography></div>
            <div className='m8 tableRowDetails'><Typography variant="mdm">Email</Typography></div>
            <div className='m8 tableRowDetails' style={{minWidth: '200px'}}><Typography variant="mdm">Message</Typography></div>
            <div className='m8 tableRowDetails' style={{width: '100px'}}><Typography variant="mdm">Actions</Typography></div>
          </div>
        
          {objects.map((Offer) => (
            <div key={Offer._id} className="tableRow">
              <div className='m4 tableRowDetails' style={{maxWidth: '100px', overflow: 'hidden', cursor: 'pointer'}}>{Offer.estateId && <div onClick={() => openEstate(Offer.estateId)}><Typography variant="md">{Offer.estateId}</Typography></div>}</div>
              <div className='m4 tableRowDetails'><Typography variant="mdm">{Offer.name}</Typography></div>
              <div className='m4 tableRowDetails'><Typography variant="md">{Offer.email}</Typography></div>
              <div className='m4 tableRowDetails' style={{minWidth: '200px'}}><Typography variant="md">{Offer.message}</Typography></div>
              <div className='m4 tableRowDetails' style={{width: '100px'}}><div className="actionButton delete" onClick={() => handleDelete(Offer._id)}><DeleteOutlineOutlinedIcon/></div>
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