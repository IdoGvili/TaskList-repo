import { createTheme } from '@mui/material';
import {
    red,
    green,
    blue,
    yellow,
    lightBlue,
    lightGreen,
    orange,
} from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: green[500],
        },
        priority: {
            low: blue[500],
            medium: orange[500],
            high: red[500],
            new: green[500],
        },
        form: {
            field: lightGreen[100],
        },
    },
});

export default theme;
