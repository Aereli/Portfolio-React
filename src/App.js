import React from "react"
// import logo from './logo.svg';
import "./App.css"
import Home from "./pages/home"
import Work from "./pages/work"
import Contact from "./pages/contact"
import Uses from "./pages/uses"
import Success from "./pages/success"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useSpring, animated } from "react-spring"

const App = () => {
  const Fade = useSpring({
    from: { opacity: 0 },
    opacity: 1
  })

  return (
    <animated.div style={Fade}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/contact/uses" component={Uses} />
          <Route path="/success" component={Success} />
          <Route path="/" render={() => <div> Error 404</div>} />
        </Switch>
      </BrowserRouter>
    </animated.div>
  )
}

export default App
