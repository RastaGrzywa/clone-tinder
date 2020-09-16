import React from 'react'
import { Person, Forum } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <IconButton>
        <Person
          fontSize="large"
          className={styles.icon}
        />
      </IconButton>
      <IconButton>
        <img
          className={styles.logo}
          src="./tinder-logo.png"
          alt=""
        />
      </IconButton>
      <IconButton>
        <Forum
          fontSize="large"
          className={styles.icon}
        />
      </IconButton>
    </div>
  )
}

export default Header

