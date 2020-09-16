import React from 'react'
import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import styles from './SwipeButtons.module.css';

const SwipeButtons = () => {
  return (
    <div className={styles.swipeButtons}>
      <IconButton className={`${styles.button} ${styles.repeat}`}>
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className={`${styles.button} ${styles.left}`}>
        <Close fontSize="large" />
      </IconButton>
      <IconButton className={`${styles.button} ${styles.star}`}>
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className={`${styles.button} ${styles.right}`}>
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className={`${styles.button} ${styles.lightning}`}>
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
