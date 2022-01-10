import React from 'react'

function Isogram() {


    function isIsogram(str){ 
        
        return !/(\w).*\1/i.test(str)
        // \w matches word characters that includes these :(A-Z ,a-z,0-9)
        // .* matches zero or more occurance of any character
        // \1 matches the first group of the string 
        // test method returns true if it find a match otherwise false
      }
    return (

        
        <div>
            <h1>{console.log(isIsogram("name"))}</h1>
        </div>
    )
}

export default Isogram
