import { createTheme } from '@mui/material/styles';
import { deepPurple, amber, red } from '@mui/material/colors';

// Create a theme instance.
let theme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: deepPurple,
      secondary: amber,
    },
  });

export default theme;
