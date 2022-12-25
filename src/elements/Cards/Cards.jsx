import React from 'react'
// import styles from './Button.module.css';
import styles from './cards.module.css';

const Card = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <h1>Name: {props.info.name} <br />Surname: {props.info.surname}</h1>
        <h2>Roll No: {props.info.roll}</h2>
      </div>
    </div>
  )
}

export default Card