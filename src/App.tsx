import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Router } from './Router';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
