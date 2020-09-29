import React, { useState } from 'react';

import "./StepStyles.css";
import styles from './AddPhoneCode.module.css';

const AddPhoneCode = ({ newPosition, onNextPage, providedPhone }) => {

  const [nextButtonActive, setNextButtonActive] = useState(false);
  const inputRefs = Array(6).fill(React.createRef());

  const handleNextAfterEdit = (index) => {
    CheckIfAllFieldsAreFilled();
    if (inputRefs[index].value === ""){
      return;
    } 
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].focus();
    }
  }

  const handlePreviousAfterDelete = (key, index) => {
    if (key === "Backspace") {
      if (inputRefs[index].value === "" && index > 0){
        inputRefs[index - 1].focus();
      } 
    }
  }

  const CheckIfAllFieldsAreFilled = () => {
    let allFilled = true;
    inputRefs.map( input => {
      if (input.value.length === 0){
        allFilled = false;
      }
    })
    setNextButtonActive(allFilled);
  }
  
  const handleNextPageButton = () => {
    if (nextButtonActive) {
      onNextPage();
    }
  }

  return (
    <div className={`page ${newPosition}`}>
      <h3>Mój kod to</h3>
      <div className={styles.inputContainer}>
        {
          inputRefs.map((k, idx) => (
            <input 
              key={idx} 
              ref={r => inputRefs[idx] =  r} 
              className={styles.codeInput} 
              onChange={() => handleNextAfterEdit(idx)}
              onKeyDown={(e) => handlePreviousAfterDelete(e.key, idx)}
              type="text" 
              maxLength="1" />
          ))
        }
      </div>
      <div className={styles.sendSMSAgainContainer}>
        <p>providedPhone</p>
        <p className={styles.sendSMSAgainButton}>Wyślij ponownie</p>
      </div>
      <div className="nextButtonContainer">
        <button className={`nextButton ${nextButtonActive ? "buttonActive" : null}` } onClick={() => handleNextPageButton()}>dalej</button>
      </div>
    </div>
  )
}

export default AddPhoneCode
