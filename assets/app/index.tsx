import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../css/app.scss';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

const queryClient = new QueryClient();
const defaultTheme = createTheme();

root.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </QueryClientProvider>
);
