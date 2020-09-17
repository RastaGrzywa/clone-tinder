import React from 'react';
import './App.css';

import { Header, Cards, SwipeButtons, MultiStepForm } from './components';
import { StateMachineProvider, createStore } from "little-state-machine";

function App() {
  
  createStore({
    userRegistrationDetails: {
      firstName: "",
      lastName: "",
      age: ""
    },
    registrationFormScreen: {
      step: 0
    }
  });

  return (
    <div className="app">
      <StateMachineProvider >
      <MultiStepForm />

      </StateMachineProvider>
      {/* <Header />
      <Cards />
      <SwipeButtons /> */}
    </div>
  );
}

export default App;
