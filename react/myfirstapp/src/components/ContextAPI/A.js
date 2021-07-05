import React, {Component} from 'react'
import B from './B'
import myContext  from './Context'

class A extends Component{
    constructor(props){
        super(props)

        this.state={
            name: "Isha Bhatt",
            city: "Lucknow"
        }
    }
    updateState = ()=>{
        this.setState({
            name: "Isha",
            city: "Lucknow"
        })
    }
      render(){
      return(
          <div>
              <h3>A component</h3>
              <button className="btn btn-primary" onClick={this.updateState}>Update State</button>
              <myContext.Provider value={this.state}>
              <B/>
              </myContext.Provider>
              
          </div>
      )
      }
}
export default A