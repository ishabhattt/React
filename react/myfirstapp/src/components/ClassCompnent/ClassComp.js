import React from 'react'
import './ClassComp.css'

class ClassComp extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="myclass">
            <h2>First Class Component</h2>
            <p>I have created class components</p>
        </div>
    }
}
export default ClassComp