import React from 'react';
import ReactDOM from 'react-dom'; import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LuckyNumber from './pages/LuckyNumber';
import LocalTime from './pages/LocalTime';
import Greeting from './pages/Greeting';
import "./assets/css/style.css";
import MappingData from './pages/MappingData';
import Emojipedia from './pages/Emojipedia';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="lucky-number" element={<LuckyNumber />} />
        <Route path="local-time" element={<LocalTime />} />
        <Route path="greeting" element={<Greeting />} />
        <Route path="mapping-data" element={<MappingData />} />
        <Route path="emojipedia" element={<Emojipedia />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
