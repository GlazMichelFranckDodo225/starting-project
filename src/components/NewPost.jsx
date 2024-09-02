import classes from './NewPost.module.css';

function NewPost() {
  // In Regular JS, to Add Event Listener
  /* document.querySelector('change', () => {

  }) */
  function changeBodyHandler(event) {
    console.log(event.target.value); // target ==> "textarea" Element
    
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
