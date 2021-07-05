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
                              <li className="nav-item"><Link to='/login' className="nav-link text-white" >Login</Link></li>
                              <li className="nav-item"><Link to='/register' className="nav-link text-white" >Register</Link></li>
                            
                              </ul> 
                    </nav>
                </div>
            </div>
        )
    }
}
export default Navbar