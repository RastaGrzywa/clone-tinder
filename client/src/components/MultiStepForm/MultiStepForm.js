import React from 'react'
import { StateMachineProvider, createStore, useStateMachine } from "little-state-machine";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import StateMachine from "../../StateMachine";

import styles from './MultiStepForm.module.css';

const CurrentPage = (props) => {
  return (
    <div className={styles.pages}>
      <div className={styles.page}>
        <h1>Phone</h1>
      </div>
      <div className={styles.page}>
        <h1>PhoneCode</h1>
      </div>
      <div className={styles.page}>
        <h1>email</h1>
      </div>
    </div>
  );
};

const MultiStepForm = () => {
  const { state, action } = useStateMachine(StateMachine);

  const onNextPage = () => {
    action({ 
      registrationFormScreen: {
        step: state.registrationFormScreen.step + 1
      }
    });
  };
  const onPrevPage = () => {
    action({ 
      registrationFormScreen: {
        step: state.registrationFormScreen.step - 1
      }
    });
  };

  return (
    <div className={styles.container}>
      <CurrentPage 
        step={state.registrationFormScreen.step}
      />
      <div>
        <button onClick={() => onPrevPage()}>prev</button>
        <button onClick={() => onNextPage()}>next</button>
      </div>
    </div>
  )
}

export default MultiStepForm
