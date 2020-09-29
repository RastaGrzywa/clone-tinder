import React, { useState } from 'react';

import "./StepStyles.css";

const AddEmail = ({ newPosition, onNextPage}) => {

  const [nextButtonActive, setNextButtonActive] = useState(false);
  
  const handleEmailChange = (e) => {
    if (validateEmail(e.target.value)){
      setNextButtonActive(true);
    } else {
      setNextButtonActive(false);
    }
  }

  const validateEmail = (email) => {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }
  
  const handleNextPageButton = () => {
    if (nextButtonActive) {
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
