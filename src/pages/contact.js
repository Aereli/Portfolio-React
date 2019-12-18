import React from 'react'
import '../stylesheets/contact.css'

class Contact extends React.Component{
  render(){
    const string = "oyanadel"
    const splitstring = string.split("")
    return(
      <>
        <h1 className="contact-oyanadel">
          <a href="/">
            {
              splitstring.map(letter => (
                <span className="each-letter-lrg">{letter}</span>
              ))
            }
          </a>
        </h1>
        <h3 className="contact-title">Send me a message!</h3>
        <div className="contact-form">
          <form name="contact" method="post" action="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Your Name: <input type="text" name="name"/></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email"/></label>
            </p>
            <p>
              <textarea name="message" placeholder="message me here.."></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </>
    )
  }

}

export default Contact