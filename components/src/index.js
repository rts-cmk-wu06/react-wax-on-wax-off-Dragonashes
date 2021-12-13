import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Family from './Templates/Family';
import Family2 from './Templates/Family2';
import Family3 from './Templates/Family3';
import Family4 from './Templates/Family4';
import Family5 from './Templates/Family5';
import Family6 from './Templates/Family6';
import Greeting from "./Components/Greeting";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>
      <Family />
      <br />
      <Family2 />
      <br />
      <Family3 />
      <br />
      <Family4 />
      <br />
      <Family5 />
      <br />
      <Family6 />
      <br />
      <Greeting genre="TRAVEL" heading="Surfing in Maldives" />
      <Greeting genre="LEISURE" heading="Outdoor experience" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);