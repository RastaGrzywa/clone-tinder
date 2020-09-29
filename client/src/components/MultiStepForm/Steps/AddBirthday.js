import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import "./StepStyles.css";

const AddBirthday = ({ newPosition, onNextPage }) => {

  const [nextButtonActive, setNextButtonActive] = useState(false);

  const handleDateChange = (e) => {
    var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if(regex.test(e.target.value)){
      setNextButtonActive(true);
    } else {
      setNextButtonActive(false);
    }
  }
    
  const handleNextPageButton = () => {
    if (nextButtonActive) {
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
