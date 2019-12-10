import React from 'react'

class Contact extends React.Component{
  render(){
    return(
      <>
        <h1>contact</h1>
        <p> Send me a message!</p>
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
      </>
    )
  }

}

export default Contact