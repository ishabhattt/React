import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Navbar extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-dark bg-dark">
                        <a href="#" className="navbar-brand">React Routing Application</a>
                          <ul className="nav">
                              <li className="nav-item"><Link to='/' className="nav-link text-white" >Home</Link></li>
                              <li className="nav-item"><Link to='/react' className="nav-link text-white" >React</Link></li>
                              <li className="nav-item"><Link to='/user' className="nav-link text-white" >Users</Link></li>
                              <li className="nav-item"><Link to='/post' className="nav-link text-white" >Post</Link></li>
                              <li className="nav-item"><Link to='/lcm' className="nav-link text-white" >LifeCycleMethod</Link></li>
                              <li className="nav-item"><Link to='/home' className="nav-link text-white" >Higher Order Component</Link></li>
                              </ul> 
                    </nav>
                </div>
            </div>
        )
    }
}
export default Navbar