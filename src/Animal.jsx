import React from 'react';


function Animal(){

    const animals = (chicken,cow,pig) => {

        let chickenlegs = chicken * 2;
        let cowlegs = cow * 4;
        let piglegs = pig *4;
   
         
        let total = `Total leg count is ${chickenlegs + cowlegs + piglegs}`;
   
       return total;
   }

   return(
       
       <>
         <h4>ANIMAL code task FUNCTIONAL comp</h4>
         {animals(2,3,4)}
       </>

   )
 
}


export default Animal;