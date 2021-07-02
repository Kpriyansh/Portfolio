import React from 'react';
import Styles from './Scroll.module.css';
const Scroll = (props) => {
  return (
    <React.Fragment>
      <div className={Styles.Scroll}>
        {props.children}
      </div>
    </React.Fragment>
  );
}
export default Scroll;