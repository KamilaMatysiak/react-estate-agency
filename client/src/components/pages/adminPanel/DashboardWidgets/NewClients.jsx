import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { useChart } from '../../../../data/chart'

// ----------------------------------------------------------------------

NewClients.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  chartHeight: PropTypes.string,
};

export default function NewClients({ title, subheader, chartLabels, chartData, chartHeight, ...other }) {
  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: '50%' } },
    fill: { type: chartData.map((i) => i.fill) },
    labels: chartLabels,
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]},
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} clients`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card sx={{borderRadius:'8px'}} {...other}>
      <CardHeader title={title} sx={{pb:0}} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1, pt:0}} dir="ltr">
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={chartHeight} />
      </Box>
    </Card>
  );
}