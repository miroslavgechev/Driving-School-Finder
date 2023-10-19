import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <h1>Driving School Finder</h1>
      <Button variant="outlined" onClick={(e) => console.log(e.target)}>Hello world</Button>
    </div>
  );
}

export default App;

