import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useStateMachine } from "little-state-machine";
import StateMachine from "../../../StateMachine";

import "./StepStyles.css";

const AddBirthday = ({ newPosition, onNextPage }) => {

  const { state, action } = useStateMachine(StateMachine);
  const [nextButtonActive, setNextButtonActive] = useState(false);
  const [birthday, setBirthday] = useState(false);

  const handleDateChange = (e) => {
    var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if(regex.test(e.target.value)){
      setNextButtonActive(true);
    } else {
      setNextButtonActive(false);
    }
    setBirthday(e.target.value);
  }
    
  const handleNextPageButton = () => {
    if (nextButtonActive) {
      action({ 
        userRegistrationDetails: {
          ...state.userRegistrationDetails,
          birthday: birthday
        }
      });
      onNextPage();
    }
  }

  return (
    <div className={`page ${newPosition}`}>
      <h3>Moje urodziny są</h3>
      <InputMask className="textInput" mask="99/99/9999" placeholder="DD/MM/YYYY" onChange={(e) => handleDateChange(e)} />
      <div className="nextButtonContainer">
        <button className={`nextButton ${nextButtonActive ? "buttonActive" : null}` } onClick={() => handleNextPageButton()}>dalej</button>
      </div>
    </div>
  )
}

export default AddBirthday
