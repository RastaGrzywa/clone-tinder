import React, { useState } from 'react';
import { useStateMachine } from "little-state-machine";
import StateMachine from "../../../StateMachine";

import "./StepStyles.css";

const AddFirstname = ({ newPosition, onNextPage }) => {
  
  const { state, action } = useStateMachine(StateMachine);
  const [nextButtonActive, setNextButtonActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  
  const handleTextChange = (e) => {
    if (e.target.value.length > 0){
      setNextButtonActive(true);
    } else {
      setNextButtonActive(false);
    }
    setFirstName(e.target.value);
  }
    
  const handleNextPageButton = () => {
    if (nextButtonActive) {
      action({ 
        userRegistrationDetails: {
          ...state.userRegistrationDetails,
          firstName: firstName
        }
      });
      onNextPage();
    }
  }

  return (
    <div className={`page ${newPosition}`}>
      <h3>Moje imię to</h3>
      <input className="textInput" type="text" onChange={(e) => handleTextChange(e)} />
      <div className="nextButtonContainer">
        <button className={`nextButton ${nextButtonActive ? "buttonActive" : null}` } onClick={() => handleNextPageButton()}>dalej</button>
      </div>
    </div>
  )
}

export default AddFirstname
