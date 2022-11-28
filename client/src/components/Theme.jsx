import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#3C3D4A',
      main: '#2A2B34',
      dark: '#212229',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FFBA5B',
      main: '#FFA220',
      dark: '#DA721E',
      contrastText: '#333333',
    },
    text: {
      black: "#333",
      secondaryBlack: "#777",
      white: "#fff",
      secondaryWhite: '#ddd'
    },
    background: '#F8F8F8', 
  },

  shape: {
    borderRadius: 0,
  },

  typography: {
    fontFamily: 'Montserrat',
    display: {
      fontSize: 72,
      fontWeight: 800,
    },
    h1b: {
      fontSize: 61,
      fontWeight: 700,
    },
    h1m: {
      fontSize: 61,
      fontWeight: 500,
    },
    h1: {
      fontSize: 61,
      fontWeight: 400,
    },

    h2b: {
      fontSize: 48,
      fontWeight: 600,
    },
    h2m: {
      fontSize: 48,
      fontWeight: 500,
    },
    h2: {
      fontSize: 48,
      fontWeight: 400,
    },

    h3m: {
      fontSize: 31,
      fontWeight: 500,
    },
    h3: {
      fontSize: 31,
      fontWeight: 400,
    },
    h3l: {
      fontSize: 31,
      fontWeight: 300,
    },

    xlm: {
      fontSize: 25,
      fontWeight: 500,
    },
    xl: {
      fontSize: 25,
      fontWeight: 400,
    },
    xll: {
      fontSize: 25,
      fontWeight: 400,
    },

    lgm: {
      fontSize: 20,
      fontWeight: 500,
    },
    lg: {
      fontSize: 20,
      fontWeight: 400,
    },
    lgl: {
      fontSize: 20,
      fontWeight: 400,
    },

    mdm: {
      fontSize: 16,
      fontWeight: 500,
    },
    md: {
      fontSize: 16,
      fontWeight: 400,
    },
    mdl: {
      fontSize: 16,
      fontWeight: 400,
    },

    smm: {
      fontSize: 13,
      fontWeight: 500,
    },
    sm: {
      fontSize: 13,
      fontWeight: 400,
    },
    sml: {
      fontSize: 13,
      fontWeight: 400,
    },

    sml_italic: {
      fontSize: 13,
      fontWeight: 400,
      fontStyle: 'italic',
    },

    xsm: {
      fontSize: 10,
      fontWeight: 500,
    },
    xs: {
      fontSize: 10,
      fontWeight: 400,
    },
    xsl: {
      fontSize: 10,
      fontWeight: 400,
    },
  }
});

export default theme;