import React from 'react';
import classes from './ButtonInput.module.css';

const ButtonInput=({children,...props})=>{

return(
    <button  {...props} className={classes.inpBtn}>
        {children}
    </button>
)

}

export default ButtonInput;