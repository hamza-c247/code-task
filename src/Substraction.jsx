import React, { Component } from 'react'

export default class Substraction extends Component {

    // imp= always write a function before render method
    sub =(num1,num2) =>{
     return(num1-num2)
    }
    render() {
        return (
            <>
               <h4>CLASS Component substraction</h4> 
               {this.sub(5,4)}
            </>
        )
    }
}
