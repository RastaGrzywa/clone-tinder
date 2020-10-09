import React, { useState } from 'react';
import './App.css';

import { Header, Cards, SwipeButtons, MultiStepForm, LandingPage } from './components';
import { StateMachineProvider, createStore } from "little-state-machine";

function App() {
  
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  
  const handleCloseForm = () => {
    setShowRegisterForm(false);
    setShowLoginForm(false);
  }
  createStore({
    userRegistrationDetails: {
      phone: "",
      firstName: "",
      email: "",
      sex: "",
      birthday: ""
    },
    registrationFormScreen: {
      step: 0
    }
  });

  return (
    <div className="app">
      { !showRegisterForm && (
        <LandingPage 
          handleRegisterButton={setShowRegisterForm}
          handleLoginButton={setShowLoginForm}
        />
      )}
      { showRegisterForm && (
        <StateMachineProvider >
          <MultiStepForm 
            handleCloseForm={handleCloseForm}
          />
        </StateMachineProvider>
      )}
      
      {/* <Header />
      <Cards />
      <SwipeButtons /> */}
    </div>
  );
}

export default App;
