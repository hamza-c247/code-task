import React, { Component } from 'react'

export default class Addition extends Component {

     add = (num1,num2) => {
     return(num1+num2);
    }
    render() {
        return (
            <>
            <h4>CLASS Component addition</h4>
                {this.add(5,4)}
            </>
        )
    }
}
