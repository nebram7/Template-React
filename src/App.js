import React , {Component} from "react"
import {BrowserRouter , Route} from 'react-router-dom'
import Contact from "./Components/Contact"
import Index from "./Components/Index"
import Navbar from "./Components/Navbar"
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={Index}/>
        <Route path='/Contact' component={Contact}/>
      </BrowserRouter>
    )
  }
}

export default App;
