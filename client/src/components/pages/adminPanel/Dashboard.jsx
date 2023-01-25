import theme from '../../Theme'
import { ThemeProvider, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'

import SummaryWidget from './DashboardWidgets/SummaryWidget'
import EarningChart from './DashboardWidgets/EarningChart'
import CurrentlyOwned from './DashboardWidgets/CurrentlyOwned'
import NewClients from './DashboardWidgets/NewClients'
import { getAllEstates } from '../../../actions/estates'
import { useSelector, useDispatch } from 'react-redux'

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEstates());
  }, [])

  const {estates} = useSelector((state) => state.estates);
  var forRent = 0;
  var forSale = 0;
  var HouseForRent = 0;
  var HouseForSale = 0;
  var FlatForRent = 0;
  var FlatForSale = 0;
  var RentedHouses = 0;
  var RentedFlats = 0;
  var SoldHouses = 0;
  var SoldFlats = 0;
  const totalEstates = estates.length;
  for(const estate of estates) {
    if(estate.status == "For Rent") {
      forRent += 1
      if(estate.type == "House") HouseForRent += 1;
      else FlatForRent += 1;
    }
    if(estate.status == "For Sale") {
      forSale += 1
      if(estate.type == "House") HouseForSale += 1;
      else FlatForSale += 1;
    }
    if(estate.status == "Rented") {
      if(estate.type == "House") RentedHouses += 1;
      else RentedFlats += 1;
    }
    if(estate.status == "Sold") {
      if(estate.type == "House") SoldHouses += 1;
      else SoldFlats += 1;
    }
  }

  const customers = RentedFlats + RentedHouses + SoldFlats + SoldHouses
  const rented = RentedFlats + RentedHouses
  const sold = SoldFlats + SoldHouses

  
  
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 8 }}>

        <h1>Dashboard</h1>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={6}>
            <EarningChart
              title="Sold estates"
              subheader={`+${sold}`}
              chartLabels={[
                '01/02/2022',
                '02/02/2022',
                '03/02/2022',
                '04/02/2022',
                '05/02/2022',
                '06/02/2022',
                '07/02/2022',
                '08/02/2022',
                '09/02/2022',
                '10/02/2022',
                '11/02/2022',
              ]}
              chartData={[
                {
                  name: 'Sales',
                  type: 'area',
                  fill: 'gradient',
                  data: [0,0,0,0,0,0,0,0,0,0,sold],
                },
              ]}
              chartHeight="215px"
            />
          </Grid>

          <Grid container marginLeft={'0px'} paddingTop={'24px'} spacing={3} xs={12} sm={3} md={6}>
            <Grid item xs={12} sm={3} md={6}>
              <SummaryWidget title="properties for rent" total={forRent} color="#FFDBAA" icon={'material-symbols:vpn-key-outline'} />
            </Grid>

            <Grid item xs={12} sm={3} md={6}>
              <SummaryWidget title="total properties" total={totalEstates} color="rgba(47,128,237,0.3)" icon={'ic:outline-home'} />
            </Grid>

            <Grid item xs={12} sm={3} md={6}>
              <SummaryWidget title="properties for sale" total={forSale} color="rgba(39,174,96,0.4)" icon={'ic:outline-local-offer'} />
            </Grid>

            <Grid item xs={12} sm={3} md={6}>
              <SummaryWidget title="total customers" total={customers} color="rgba(155,81,224,0.3)" icon={'ic:sharp-person-outline'} />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <CurrentlyOwned
              title="Currently owned properties"
              chartData={[
                { label: 'Available apartments', value: FlatForRent },
                { label: 'Rented apartments', value: RentedFlats },
                { label: 'Available houses', value: HouseForRent },
                { label: 'Rented houses', value: RentedHouses },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <NewClients
              title="New Tenants"
              chartData={[
                {
                  name: 'New Tenants',
                  type: 'bar',
                  fill: 'gradient',
                  data: [0, 0, 0, 0, 0, rented],
                },
              ]}
              chartHeight='153px'
            />
          </Grid>

        </Grid>
      </Container>
    </ThemeProvider>


  )
}

export default Dashboard