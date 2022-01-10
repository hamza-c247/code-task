import React from 'react';

function String(){

    const a = "john";
    const b = "Joe";
    const c = "Jack";
    
    const template =`their names were : ${a} ${b} ${c}`


    return(
      <>
      <h4>Template literal code task</h4>
      {template}
      </>
    )

}
export default String


