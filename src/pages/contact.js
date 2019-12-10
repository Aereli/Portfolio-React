import React from 'react'
import '../stylesheets/contact.css'

class Contact extends React.Component{
  render(){
    return(
      <>
        <h1 className="contact-oyanadel"><a href ="/">Oyanadel</a></h1>
        <h1 className="contact-header">contact</h1>
        <p className="contact-title">Send me a message!</p>
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
              <label>Message: <textarea name="message"></textarea></label>
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