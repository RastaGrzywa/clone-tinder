import React, { useState } from 'react';

import "./StepStyles.css";

const AddFirstname = ({ newPosition, onNextPage }) => {
  
  const [nextButtonActive, setNextButtonActive] = useState(false);
  
  const handleTextChange = (e) => {
    if (e.target.value.length > 0){
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
      <h3>Moje imię to</h3>
      <input className="textInput" type="text" onChange={(e) => handleTextChange(e)} />
      <div className="nextButtonContainer">
        <button className={`nextButton ${nextButtonActive ? "buttonActive" : null}` } onClick={() => handleNextPageButton()}>dalej</button>
      </div>
    </div>
  )
}

export default AddFirstname
