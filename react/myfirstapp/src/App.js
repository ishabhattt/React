import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Parent from './components/ChildToParent/Parent'
import A from './components/ContextAPI/A'
import Form from './components/Form/From'
import Homerouting from './components/Routing/Home'
import Assignment from './components/Assignment1/HomePage'

function App() {
  return (
    <div className="App">
   <Assignment/>

    </div>
  );
}

export default App;
