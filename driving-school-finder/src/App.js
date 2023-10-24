import './App.css';

import * as React from 'react';

import Button from '@mui/material/Button';
import WifiIcon from '@mui/icons-material/Wifi';
import { updateDrivingSchool, addDrivingSchool } from './firebase';

function App() {

  return (
    <div className="App">
      <h1>Driving School Finder</h1>
      <Button variant="outlined" onClick={() => addDrivingSchool()}>Hello world</Button>
      <WifiIcon color="success" />

    </div>
  );
}

export default App;

