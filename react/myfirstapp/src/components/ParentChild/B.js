import React from 'react'
import A from './A'

class B extends React.Component{
    constructor(){
        super()
        this.state={
            name: "Sagar Sagi",
            city:"Delhi"
        }
    }
    render(){
        return <div style={{textAlign:"center", marginTop:"100px", color: "black"  }}>
            <h2>A component</h2>
            {/* that we write to extend A into B */}
            {/* <A/> */}
            <A name={this.state.name} city={this.state.city} />
        </div>
    }
}
export default B
