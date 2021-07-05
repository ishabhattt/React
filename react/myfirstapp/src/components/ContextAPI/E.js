import React, {Component} from 'react'
import myContext  from './Context'

class E extends Component{
      render(){
      return(
          <div>
             
             <h3>E component</h3>
             <myContext.Consumer>
                 {
                     (contextData)=>{
                      return  <div>
                          <h5>Name: {contextData.name}</h5>
                          <h5>City: {contextData.city}</h5>
                      </div>
                     }
                 }
             </myContext.Consumer>
              
          </div>
      )
      }
}
export default E