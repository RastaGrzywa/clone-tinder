import React from 'react'

import styles from './LandingPage.module.css';

const LandingPage = ({ handleRegisterButton, handleLoginButton }) => {
  return (
    <div>
      <div className={styles.header}>
        <img className={styles.logo} src="./tunderLogoLanding.png" alt="Here should be logo" />
      </div>
      <div className={styles.backgroundImage}>
        <div className={styles.backgroundImageOverlay}>
          <div className={styles.welcomeMessage}>
            <h1>Wybieraj.</h1>
            <h1>Rozmawiaj.</h1>
            <h1>Randkuj.</h1>
          </div>
          <div className={styles.signingButtonsContainer}>
            <button className={`${styles.button} ${styles.registerButton}`} onClick={() => handleRegisterButton(true)}>Utwórz konto</button>
            <button className={`${styles.button} ${styles.loginButton}`} onClick={() => handleLoginButton(true)}>Zaloguj się</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
