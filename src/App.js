import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Work from './pages/work'
import Contact from './pages/contact'
import Uses from './pages/uses'
import Success from './pages/success'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/work" component={Work}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/uses" component={Uses}/>
          <Route path="/success" component={Success}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
