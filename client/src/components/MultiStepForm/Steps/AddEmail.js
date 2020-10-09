import React, { useState } from 'react';
import { useStateMachine } from "little-state-machine";
import StateMachine from "../../../StateMachine";

import "./StepStyles.css";

const AddEmail = ({ newPosition, onNextPage}) => {

  const { state, action } = useStateMachine(StateMachine);
  const [nextButtonActive, setNextButtonActive] = useState(false);
  const [email, setEmail] = useState("");
  
  const handleEmailChange = (e) => {
    if (validateEmail(e.target.value)){
      setNextButtonActive(true);
    } else {
      setNextButtonActive(false);
    }
    setEmail(e.target.value);
  }

  const validateEmail = (email) => {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }
  
  const handleNextPageButton = () => {
    if (nextButtonActive) {
      action({ 
        userRegistrationDetails: {
          ...state.userRegistrationDetails,
          email: email
        }
      });
      onNextPage();
    }
  }
  return (
    <div className={`page ${newPosition}`}>
      <h3>Mój email to</h3>
      <input className="textInput" type="email" onChange={(e) => handleEmailChange(e)} />
      <div className="nextButtonContainer">
        <button className={`nextButton ${nextButtonActive ? "buttonActive" : null}` } onClick={() => handleNextPageButton()}>dalej</button>
      </div>
    </div>
  )
}

export default AddEmail
