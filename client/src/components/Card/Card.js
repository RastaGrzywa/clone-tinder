import React from 'react'
import TinderCard from 'react-tinder-card';
import styles from './Card.module.css';

const Card = ({ person: {name, age, url}, handleSwipe, outOfFrame }) => {
  return (
    <TinderCard
      className={styles.swipe}
      key={name}
      preventSwipe={["up", "down"]}
      onSwipe={(dir) => handleSwipe(dir, name)}
      onCardLeftScreen={() => outOfFrame(name)}
    >
      <div
        style={{ backgroundImage: `url(${url})` }}
        className={styles.card}
      >
        <h3>{name}, {age}</h3>
      </div>
    </TinderCard>
  )
}

export default Card
