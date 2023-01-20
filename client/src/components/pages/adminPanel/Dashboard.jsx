import theme from '../../Theme'
import { ThemeProvider, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

import SummaryWidget from './DashboardWidgets/SummaryWidget'

const Dashboard = () => {
  return (
   <ThemeProvider theme ={theme}>
    <Container sx={{ marginTop: 8 }}>

      <h1>Dashboard</h1>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <SummaryWidget title="Weekly Sales" total={714} color="#FFDBAA" icon={'material-symbols:vpn-key-outline'}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SummaryWidget title="New Users" total={135} color="#2F80ED" icon={'ic:outline-home'}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SummaryWidget title="Item Orders" total={172} color="warning" icon={'ic:outline-local-offer'}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SummaryWidget title="Bug Reports" total={234} color="error" icon={'ic:sharp-person-outline'}/>
          </Grid>
        </Grid>
    </Container>
   </ThemeProvider>

    
  )
}

export default Dashboard