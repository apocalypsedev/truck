// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from '../src/assets/eng.json';
import translationUZ from '../src/assets/uz.json';
import i18next from 'i18next';

const resources = {
  en: {
    translation: translationEN
  },
  uz: {
    translation: translationUZ
  }
};

i18next
  .use(initReactI18next) 
  .use(LanguageDetector) 
  .init({
    resources,
    lng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);
