import React, {Component} from 'react'

class StateComp extends Component{
    constructor(){
        super() 
        // super calls the parent class (component class ) constructor
    this.state = {
        name: "Sagar",
        bio: "I am a react developer."
    }
    }
    upDateState = ()=>{
        this.setState({
            name: "Kabir",
            bio: "I ma developer"
        })
    }

    render(){
        return <div>
            <h2>State Concept</h2>
            <h4>Name:{this.state.name}</h4>
            <p>{this.state.bio}</p>
            <button className="btn btn-primary" onClick={this.upDateState}>Update state</button>
        </div> 
    }
}

export default StateComp