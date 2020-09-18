import React, { useState } from 'react'
import { useStateMachine } from "little-state-machine";
import StateMachine from "../../StateMachine";
import { AddPhone, AddPhoneCode, AddEmail, AddFirstname, AddBirthday, AddSex } from "./Steps";

import styles from './MultiStepForm.module.css';

const views = [
  "phone",
  "phoneCode",
  "email",
  "firstname",
  "birthday",
  "sex"
];

const CurrentPage = (props) => {
  return (
    <div className={styles.pages}>
      <AddPhone
        newPosition={props.phonePosition}
      />
      <AddPhoneCode
        newPosition={props.phoneCodePosition}
      />
      <AddEmail
        newPosition={props.emailPosition}
      />
      <AddFirstname
        newPosition={props.firstnamePosition}
      />
      <AddBirthday
        newPosition={props.birthdayPosition}
      />
      <AddSex
        newPosition={props.sexPosition}
      />
    </div>
  );
};

const MultiStepForm = () => {
  const { state, action } = useStateMachine(StateMachine);
  const [ phonePosition, setPhonePosition ] = useState("stepShow");
  const [ phoneCodePosition, setPhoneCodePosition ] = useState("stepRight");
  const [ emailPosition, setEmailPosition ] = useState("stepRight");
  const [ firstnamePosition, setFirstnamePosition ] = useState("stepRight");
  const [ birthdayPosition, setBirthdayPosition ] = useState("stepRight");
  const [ sexPosition, setSexPosition ] = useState("stepRight");

  const onNextPage = () => {
    if (state.registrationFormScreen.step === views.length - 1){
      return;
    }
    let newScreenId = state.registrationFormScreen.step + 1
    action({ 
      registrationFormScreen: {
        step: newScreenId
      }
    });
    setupViews(views[newScreenId]);
  };
  
  const onPrevPage = () => {
    if (state.registrationFormScreen.step === 0){
      return;
    }
    let newScreenId = state.registrationFormScreen.step - 1
    action({ 
      registrationFormScreen: {
        step: newScreenId
      }
    });
    setupViews(views[newScreenId]);
  };

  const setupViews = (viewName) => {
    switch (viewName) {
      case "phone":
        setPhonePosition("stepShow");
        setPhoneCodePosition("stepRight");
        break;
      case "phoneCode":
        setPhonePosition("stepLeft");
        setPhoneCodePosition("stepShow");
        setEmailPosition("stepRight");
        break;
      case "email":
        setPhoneCodePosition("stepLeft");
        setEmailPosition("stepShow");
        setFirstnamePosition("stepRight");
        break;
      case "firstname":
        setEmailPosition("stepLeft");
        setFirstnamePosition("stepShow");
        setBirthdayPosition("stepRight");
        break;
      case "birthday":
        setFirstnamePosition("stepLeft");
        setBirthdayPosition("stepShow");
        setSexPosition("stepRight");
        break;
      case "sex":
        setBirthdayPosition("stepLeft");
        setSexPosition("stepShow");
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => onPrevPage()}>prev</button>
      </div>
      <CurrentPage 
        phonePosition={phonePosition}
        phoneCodePosition={phoneCodePosition}
        emailPosition={emailPosition}
        firstnamePosition={firstnamePosition}
        birthdayPosition={birthdayPosition}
        sexPosition={sexPosition}
      />
      <div>
        <button onClick={() => onNextPage()}>next</button>
      </div>
    </div>
  )
}

export default MultiStepForm
