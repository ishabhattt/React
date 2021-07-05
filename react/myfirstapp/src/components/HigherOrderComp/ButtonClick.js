import React, {Component} from 'react'
import  HOC from './HiigherOrderComp'


class ButtonClick extends Component{
    constructor(props){
        super(props)
       
    }
    
    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Click The Button</h3>
                        <button className="btn mt-3 btn-primary" onClick={this.props.upDateState}>{this.props.name}Clicked Me {this.props.count} times</button>
                    </div>
                </div>

            </div>
        )
    }
}
// export default HOC(ButtonClick, 100)

// How you can pass  multiple data to the text box pass 2nd argument of the function as a object

export default HOC(ButtonClick, {
    countNumber :100,
    name: "Button"
})
