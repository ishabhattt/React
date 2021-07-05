import React from 'react'

class A extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: "A Component"
        }
    }
    render(){
        return <div style={{textAlign:"center", marginTop:"100px", color: "blue"  }}>
            <h2>A component</h2>
            <h4>Name:{this.props.name}</h4>
            <h4>City:{this.props.city}</h4>

        </div>
    }
}
export default A
