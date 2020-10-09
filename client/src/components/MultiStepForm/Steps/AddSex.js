import React from 'react';
import { useStateMachine } from "little-state-machine";
import StateMachine from "../../../StateMachine";

import "./StepStyles.css";

const AddSex = ({ newPosition, onNextPage }) => {
  
  const { state, action } = useStateMachine(StateMachine);

  const handleMenOption = () => {
      action({ 
        userRegistrationDetails: {
          ...state.userRegistrationDetails,
          sex: "men"
        }
      });
    onNextPage();
  }
  const handleWomenOption = () => {
    action({ 
      userRegistrationDetails: {
        ...state.userRegistrationDetails,
        sex: "woman"
      }
    });
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
