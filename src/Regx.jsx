import React from 'react'

function Regx() {
    function removeVowels(str) {
        return str.replace(/[aeiou]/gi, '');
      }
    return (

        
        <div>
            <h4>REMOVE VOVELS</h4>
            <p>{removeVowels("i have never seen a thin person drinking diet coke")}</p>
        </div>
    )
}

export default Regx
