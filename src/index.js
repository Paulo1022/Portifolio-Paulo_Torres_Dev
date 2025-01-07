import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LanguageStore } from './contexts/languageContext';
import { ModalStore } from './contexts/modalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageStore>
      <ModalStore>
        <App />
      </ModalStore>
    </LanguageStore>
  </React.StrictMode>
);
