import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({
		x: 123
	})
  return (
    <>
    <div>
      <h1>Hello World!</h1>
      <h2>{state.x}</h2>
    </div>
    </>
  );
}

export default App;
