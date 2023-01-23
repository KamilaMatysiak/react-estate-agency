import theme from '../../Theme'
import { ThemeProvider, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

import SummaryWidget from './DashboardWidgets/SummaryWidget'
import EarningChart from './DashboardWidgets/EarningChart'
import CurrentlyOwned from './DashboardWidgets/CurrentlyOwned'
import NewClients from './DashboardWidgets/NewClients'

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 8 }}>

        <h1>Dashboard</h1>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={6}>
            <EarningChart
              title="Earnings"
              subheader="+9.4mln"
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
                  name: 'Earnings',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
              ]}
              chartHeight="215px"
            />
          </Grid>

          <Grid container marginLeft={'0px'} paddingTop={'24px'} spacing={3} xs={12} sm={3} md={6}>
            <Grid item xs={12} sm={3} md={6}>
              <SummaryWidget title="properties for rent" total={31} color="#FFDBAA" icon={'material-symbols:vpn-key-outline'} />
            </Grid>

            <Grid item xs={12} sm={3} md={6}>
              <SummaryWidget title="total properties" total={122} color="rgba(47,128,237,0.3)" icon={'ic:outline-home'} />
            </Grid>

            <Grid item xs={12} sm={3} md={6}>
              <SummaryWidget title="properties for sale" total={50} color="rgba(39,174,96,0.4)" icon={'ic:outline-local-offer'} />
            </Grid>

            <Grid item xs={12} sm={3} md={6}>
              <SummaryWidget title="total customers" total={132} color="rgba(155,81,224,0.3)" icon={'ic:sharp-person-outline'} />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <CurrentlyOwned
              title="Currently owned properties"
              chartData={[
                { label: 'Available apartments', value: 4344 },
                { label: 'Rented apartments', value: 5435 },
                { label: 'Available houses', value: 1443 },
                { label: 'Rented houses', value: 4443 },
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
              title="New customers"
              chartData={[
                {
                  name: 'New Customers',
                  type: 'bar',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43],
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