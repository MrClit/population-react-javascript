import classes from './Filter.module.css'
import {useRef} from "react";

export default function Filter({min}) {
  const ref = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    min(ref.current.value);
  }

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label className={classes.label}>Minimum population:</label>
        <input
          className={classes.input}
          ref={ref}
        />
        <button className={classes.btn}>Filter</button>
      </form>
    </div>
  );
}