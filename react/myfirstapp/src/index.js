import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import MyFirstComp from './components/MyFirstComp'
import ClassComp from './components/ClassCompnent/ClassComp'
import {Provider} from 'react-redux'
import myStore from './Store/store'


ReactDOM.render(

<Provider store ={myStore}>
<App/>
</Provider>

    , document.getElementById('root'));


