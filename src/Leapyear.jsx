import React from 'react'

function Leapyear() {

    function leap ( yr ) {
        return ( yr % 4 ? false : true) 
    }
    return (
        <div>
            <h1>{console.log(leap(2024))}</h1>
        </div>
    )
}

export default Leapyear
