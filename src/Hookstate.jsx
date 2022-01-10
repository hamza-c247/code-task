import React, { useState } from 'react'


function Hookstate() {

    // const state = useState();
    // use state is a function which return an array with two items
    // console.log(state);

    const [count, setCount] = useState("Hamza");

    // useState(5) sets an initial value
    // count is known as current value
    // setCount is a function used as updated value 
    // if we update any value in setCount it becomes the current value of count
     const IncNum = () =>{
        
         setCount("full name is hamza khan");
     }

    return (
        <>
           <h4>use state exp</h4>
           <p>{count}</p> 
           <button onClick={IncNum}> Click HERE </button>
        </>
    )
}

export default Hookstate
