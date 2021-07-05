import React, {Component} from 'react'

class LifeCycleMethod extends Component{
    componentDidMount(){
        console.log("ComponentDidMount is triggered")
    }
    shouldComponentUpdate(){
        console.log("shouldcomponent is triggered")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getsnap is triggered")
    }
    componentDidUpdate(){
        console.log("didupdate is triggered")
    }
    componentWillUnmount(){
        alert("componenet will unmount")
    }
    constructor(props){
        super(props)
        this.ste ={
            count:1
        }
        console.log("Constructor is triggered")
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps is Triggered")
    }
    
    render(){
        return(
            <div>
                <h2>LifeCycleMethods</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <button onClick={()=>{this.setState({
                count:this.state.count+1
            })}}>Update Component</button>
            </div>
        )
    }
}
export default LifeCycleMethod
