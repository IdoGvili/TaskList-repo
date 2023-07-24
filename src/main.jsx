import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@mui/material/GlobalStyles';

import App from './App';
import theme from './theme';

const inputGlobalStyles = (
    <GlobalStyles
        styles={{
            body: {
                backgroundColor: 'RGB(146, 168, 209)',
                margin: 0,
                fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textAlign: 'center',
            },
        }}
    />
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            {inputGlobalStyles}
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
