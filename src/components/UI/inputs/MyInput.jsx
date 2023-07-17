import React from 'react';
import classes from './MyInput.module.css'

// const MyInput=React.forwardRef((props,ref)=>{

// return(
//     <input ref={ref} className={classes.myInp} {...props}></input>
// );

// });

const MyInput=(props)=>{

    return(
        <input className={classes.myInp} {...props}></input>
    );
    
    };
    

export default MyInput;