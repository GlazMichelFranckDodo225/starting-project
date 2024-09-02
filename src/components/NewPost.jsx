import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost() {
  // let enteredBody = "";
  // let stateData = useState('');
  // stateData[0] // Current Value
  // stateData[1] // State Updating Function
  // let [currentValue, setCurrentValue] = useState('');
  let [enteredBody, setEnteredBody] = useState('');
  
  // In Regular JS, to Add Event Listener
  /* document.querySelector('change', () => {

  }) */
  function changeBodyHandler(event) {
    // console.log(event.target.value); // target ==> "textarea" Element
    // enteredBody = event.target.value;
    setEnteredBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
