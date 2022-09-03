import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Agenda from './Agenda/agenda';
import Home from './Home/home';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

