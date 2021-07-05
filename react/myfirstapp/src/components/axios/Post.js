import ReactJs, {Component} from 'react'
import axios from 'axios'

class Post extends Component{

    constructor(props){
        super(props)

        this.state={
           postData:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            this.setState({

                 postData: response.data
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
                   {
                       this.state.postData.length >0 ? this.state.postData.map((ele)=>{
                           return <div className="col-sm-4 mt-3">
                               <div className="card">
                                   <div className="card-header bg-dark text-white">
                                           <h2>Post Data</h2>
                                   </div>
                                   <div className="card-body">
                                       <h5>{ele.title}</h5>
                                       <p>{ele.body}</p>

                                   </div>
                               </div>
                           </div>
                       }): <h3>No Data</h3>
                   }
               </div>
            </div>
        )
}
}
export default Post