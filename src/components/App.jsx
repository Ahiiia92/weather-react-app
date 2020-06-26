import React, { useState } from 'react';
import Weather from './currentLocation';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Weather />
      </div>
    </React.Fragment>
  );
};

export default App;
