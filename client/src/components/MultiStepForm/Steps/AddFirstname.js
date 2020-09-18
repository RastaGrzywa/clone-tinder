import React from 'react';

import "./StepStyles.css";

const AddFirstname = ({ newPosition }) => {
  return (
    <div className={`page ${newPosition}`}>
      <h1>My first name is</h1>
    </div>
  )
}

export default AddFirstname
