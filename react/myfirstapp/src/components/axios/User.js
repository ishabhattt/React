import ReactJs, {Component} from 'react'
import axios from 'axios'

class User extends Component{

    constructor(props){
        super(props)

        this.state={
           userData:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            this.setState({

                 userData: response.data
            })
        }, (error)=>{
            alert("error")
            console.log("error")
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="text-warning">User Data</h3>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        this.state.userData.length >0 ? <table className="table table-hover">
                            <thead className="table-dark text-white">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Company</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.userData.map((data,index)=>{
                                        return <tr>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.address.city}</td>
                                            <td>{data.company.name}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table> : <div><h2>Data is not available</h2></div>
    }
                </div>
            </div>
        )
    }
}
export default User