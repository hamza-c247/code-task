import React from 'react'

function Fizzbuzz() {

    function fizzBuzz(n) {
        // Write your code here
        for(let i = 1;  i <= n; i++) {
            
             if(i % 3 === 0 && i % 5 === 0) {
                document.write("fizzbuzz")
           }
           else if(i % 3 === 0) {
               document.write('Fizz')
           } else if(i % 5 === 0) {
                document.write('Buzz')
           } else {
                document.write(i)
          }
        }
    
      }
    return (
        <div>
          
            <h1>{fizzBuzz(100)}</h1>
        </div>
    )
}

export default Fizzbuzz
