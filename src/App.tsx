import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';
import { Header } from './components/Header/Header';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

import { CartProvider } from './contexts/useCart/useCart';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Router />
        </CartProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
