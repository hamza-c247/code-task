import React from 'react'
import Employeeinfo from './Employeeinfo'
import Handproblemdata from './Handproblemdata'

function empdata() {
    return (


        
              <div className=" d-flex">
               <h4>HAND PROBLEM</h4>

                {Handproblemdata.map((x, index) => {
                 
                    return (

                        <Employeeinfo
                            key={index}
                            Name={x.Name}
                            Age={x.Age}
                            workingHrsOfWeek={x.workingHrsOfWeek}
                            weeklysalary={x.weeklysalary}
                          

                        />

                    )
                }
                )
                }
        </div>
    )
}

export default empdata
