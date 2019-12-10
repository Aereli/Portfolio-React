import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Work from './pages/work'
import Contact from './pages/contact'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/work" component={Work}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
