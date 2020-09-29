import React from 'react';

import "./StepStyles.css";

const AddSex = ({ newPosition, onNextPage }) => {
  
  const handleMenOption = () => {
    onNextPage();
  }
  const handleWomenOption = () => {
    onNextPage();
  }
  
  return (
    <div className={`page ${newPosition}`}>
      <h3>Jestem</h3>
      
      <div className="chooseButtonContainer">
        <button className={`simpleButton`} onClick={() => handleMenOption()}>Mężczyzną</button>
        <button className={`simpleButton`} onClick={() => handleWomenOption()}>Kobietą</button>
      </div>
    </div>
  )
}

export default AddSex
