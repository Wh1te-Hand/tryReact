import React from "react";
import  {useState} from "react";

function Counter(){
    const [count,setCount]=useState(0)

function dec(){
    setCount(count-1);
}

function inc(){
    setCount(count+1);
}

return(
    <div className="Counter">
<h1>{count}</h1>
<button onClick={inc}>Increment</button>
<button onClick={dec}>Decrement</button>
</div>
)    
}

export default Counter;