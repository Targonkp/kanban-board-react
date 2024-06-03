import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './index.css';
import App from './components/App/App.jsx';
import Page from './components/Page/Page.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Routes>
              <Route path='/*' element={<Navigate to='/main'/>} />
              <Route path='/main' element={<App/>} />
              <Route path='/page' element={<Page/>} />
          </Routes>
      </BrowserRouter>
);

