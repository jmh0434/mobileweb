import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';
import PassingCount from './PassingCount';
import ProfileCard from './ProfileCard';
import AllDialog from './AllDialog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllDialog/>
  </React.StrictMode>
);
