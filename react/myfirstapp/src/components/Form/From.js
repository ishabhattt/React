import React, {Component} from 'react'

class Form extends Component{

    constructor(props) {
        super(props)

        this.state ={
            name:'',
            password:''
        }
        this.userName= React.createRef()
        this.userPassword= React.createRef()
    }
printData=()=>{
    // console.log(this.state)
    const username= this.refs.userNmae.current.value
}
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className= "col-sm-4"></div>
                    <div className = "col-sm-4">
                        <div className="card">
                            <div className="card-header">
                                <h3>Login Form</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input
                                    ref={this.userName} 
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    onChange={(event)=>{this.setState({
                                        name:event.target.value
                                    })}}
                                    />

                                </div>
                                <div className="form-group">
                                    <input
                                    ref={this.userPassword} 
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    onChange={(event)=>{this.setState({
                                        password:event.target.value
                                    })}}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                    type="button"
                                    className="btn btn-primary mt-5 px-5"
                                    value="Login"
                                    onClick={this.printData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form