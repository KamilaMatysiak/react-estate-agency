import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
// import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../../data/iconify/Iconify';
// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  marginLeft: '10px',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------

SummaryWidget.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function SummaryWidget({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 2,
        boxShadow: 1,
        textAlign: 'right',
        borderRadius: '8px',
        display:'flex',
        flexDirection:'column',
        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          backgroundColor: color,

        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </StyledIcon>

        <Typography variant="h3" marginRight="15px">{total}</Typography>

        <Typography variant="subtitle2" marginRight="15px" sx={{ opacity: 0.72 }}>
          {title}
        </Typography>
    </Card>
  );
}