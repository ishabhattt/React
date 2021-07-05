import { render } from '@testing-library/react'
import React from 'react'
 
class Child extends React.Component{
    constructor(props){
        super(props)

        this.state ={
        name:"Isha",
        city:'Delhi'
    }
    
    }
 callParentfn= ()=>{
     this.props.getFn(this.state.name, this.state.city)
 }

      render() {
          return <div>
              <button className = "btn btn-warning" onClick={this.callParentfn}></button>
          </div>

}

}
export default Child