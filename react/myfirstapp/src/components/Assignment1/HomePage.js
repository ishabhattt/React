import React, {Component} from 'react'
import Navbar from './Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'


class HomePage extends  Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                
                </Switch>
                </BrowserRouter>
                
               
            </div>
        )
    }
}
export default HomePage