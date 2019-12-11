import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import '../stylesheets/home.css'
import Face from '../images/face_black.svg'


class Home extends React.Component{
  
  render(){
    const string = "Oyanadel"
    const splitstring = string.split("")
    return(
      <div>
        <Router>
    <h1 className="home-header">
      <a href="/">
        {
          splitstring.map(letter => (
            <span className="each-letter">{letter}</span>
          ))
        }
      </a>
      </h1>
          <h2 className="home-nav-link"><a href="/work">work</a></h2>
          <h2 className="home-nav-link"><a href="/contact">contact</a></h2>
        </Router>
        <div>
          <img src={Face} alt="face" className="home-face-image" />
        </div> 
        <footer className="home-footer">
            © {new Date().getFullYear()}, from scratch by Eric
              {` `}
        </footer>
      </div>
    )
  }
}
export default Home