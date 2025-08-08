import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>

  </StrictMode>
)