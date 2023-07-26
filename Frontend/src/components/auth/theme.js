// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00adb5', // A techy primary color
        },
        secondary: {
            main: '#393e46', // A techy secondary color
        },
    },
    typography: {
        fontFamily: 'Roboto Mono, monospace', // A techy font
    },
});

export default theme;
