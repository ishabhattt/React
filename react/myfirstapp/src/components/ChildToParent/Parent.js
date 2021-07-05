import React,{Component} from 'react'
import Child from './Child'

class Parent extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            city:""
        }
    }
    updateState =(newName, newCity)=>{
        this.setState({
            name: newName,
            city: newCity
        })
    }
    render() {
        return <div>
            <h2>Name:{this.state.name}</h2>
            <h2>City:{this.state.city}</h2>
            <br/>
            <Child getFn = {this.updateState}/>
        </div>
    }
}
export default Parent