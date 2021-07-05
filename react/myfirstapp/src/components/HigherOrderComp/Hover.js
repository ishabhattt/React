import React, {Component} from 'react'
import  HOC from './HiigherOrderComp'

class Hover extends Component{
    constructor(props){
        super(props)
        // this.state = {
        //     count:0
        // }
    }
    // updateState = ()=>{
    //    this.setState({
    //        count: this.state.count +1
    //    })
    // }
    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Hovered on Text</h3>
                        <button className="btn mt-3 btn-primary" onMouseOver={this.props.upDateState}>Hovered Me {this.props.count} times</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default HOC(Hover, {
    countNumber : 10,
    name: "Text"
})