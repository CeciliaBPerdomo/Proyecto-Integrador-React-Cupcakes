import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Estilos globales
import { GlobalStyles } from './styles/GlobalStyles';

// Redux
import { Provider } from 'react-redux';
import { persistor, store } from "./redux/store.js"
import { PersistGate } from 'redux-persist/integration/react';

// Tema
import ThemeProvider from "./redux/feature/theme/ThemeProvider.js"

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
)
