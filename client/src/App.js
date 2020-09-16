import React from 'react';
import './App.css';

import { Header, Cards, SwipeButtons } from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
