import React from 'react'

function Employeeinfo(props) {
    return (
        <div>
       
            <p>NAME : {props.Name}</p>
            <p>AGE : {props.Age}</p>
            <p>WORKING HRS OF WEEK : {props.workingHrsOfWeek}</p>
            <p>WEEKLY SALARY : {props.weeklysalary}</p>

        </div>
    )
}

export default Employeeinfo
