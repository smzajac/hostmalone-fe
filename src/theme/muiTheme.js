import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#7cd783',
      main: '#4aa555',
      dark: '#0c752a',
      contrastText: '#fff',
    },
    
  },
});

export default theme;