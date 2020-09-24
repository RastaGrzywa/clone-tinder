import React, { useState } from 'react'
import { useStateMachine } from "little-state-machine";
import StateMachine from "../../StateMachine";
import { AddPhone, AddPhoneCode, AddEmail, AddFirstname, AddBirthday, AddSex } from "./Steps";
import { HighlightOff, KeyboardArrowLeft, Whatshot } from '@material-ui/icons';

import styles from './MultiStepForm.module.css';
import logo from './TunderLogo256.png';

const views = [
  "phone",
  "phoneCode",
  "email",
  "firstname",
  "birthday",
  "sex"
];

const CurrentPage = ( props ) => {
  return (
    <div className={styles.pages}>
      <AddPhone
        newPosition={props.phonePosition}
        onNextPage={props.onNextPage}
      />
      <AddPhoneCode
        newPosition={props.phoneCodePosition}
        onNextPage={props.onNextPage}
      />
      <AddEmail
        newPosition={props.emailPosition}
        onNextPage={props.onNextPage}
      />
      <AddFirstname
        newPosition={props.firstnamePosition}
        onNextPage={props.onNextPage}
      />
      <AddBirthday
        newPosition={props.birthdayPosition}
        onNextPage={props.onNextPage}
      />
      <AddSex
        newPosition={props.sexPosition}
        onNextPage={props.onNextPage}
      />
    </div>
  );
};

const MultiStepForm = () => {
  const { state, action } = useStateMachine(StateMachine);
  const [ phonePosition, setPhonePosition ] = useState("stepLeft");
  const [ phoneCodePosition, setPhoneCodePosition ] = useState("stepShow");
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
        <KeyboardArrowLeft className={`${styles.backButton} ${state.registrationFormScreen.step == 0 ? styles.notVisible : ""}`} onClick={() => onPrevPage()} style={{ fontSize: 38 }} />
        <img src={logo} className={styles.thunderLogo} />
        <HighlightOff className={styles.exitButton} onClick={() => onPrevPage()} style={{ fontSize: 38 }} />
      </div>
        <CurrentPage 
          phonePosition={phonePosition}
          phoneCodePosition={phoneCodePosition}
          emailPosition={emailPosition}
          firstnamePosition={firstnamePosition}
          birthdayPosition={birthdayPosition}
          sexPosition={sexPosition}
          onNextPage={onNextPage}
        />
    </div>
  )
}

export default MultiStepForm
