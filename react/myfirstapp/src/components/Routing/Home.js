import React, {Component} from 'react'
import Navbar from './Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './HomePage'
import ReactJs from './React'
import Angular from './Angular'
import Post from '../axios/Post'
import LifeCycleMethod from '../LifeCycleMethods/LifeCycleMethod'
import User from '../axios/User'
import HomeDoc from '../HigherOrderComp/Home'


class Home extends  Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/react" component={ReactJs}/>
                    <Route path="/user" component={User}/>
                    <Route path="/post" component={Post}/>
                    <Route path="/lcm" component={LifeCycleMethod}/>
                    <Route path="/home" component={HomeDoc}/>
                </Switch>
                </BrowserRouter>
                
               
            </div>
        )
    }
}
export default Home