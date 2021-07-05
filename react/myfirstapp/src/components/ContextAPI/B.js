import React, {Component} from 'react'
import C from './C'

class B extends Component{
      render(){
      return(
          <div>
               <h3>B component</h3>
              <C/>
          </div>
      )
      }
}
export default B