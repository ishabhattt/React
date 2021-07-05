import React, {Component} from 'react'
import ButtonClick from './ButtonClick'
import Hover  from './Hover'
class Home  extends Component{
    
    render(){
        return(
            <div >
                <ButtonClick/>
                <Hover/>

            </div>
        )
    }
}
export default Home