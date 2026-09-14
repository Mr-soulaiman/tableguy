// Defensive safeguard to ensure window.fetch is writable for iframe host environment
if (typeof window !== 'undefined') {
  try {
    let _fetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      get: () => _fetch,
      set: (fn) => {
        _fetch = fn;
      },
      configurable: true,
      enumerable: true,
    });
  } catch {
    // ignore if already defined or restricted
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
