import React from "react"
import "../stylesheets/contact.css"
import SplitString from "../components/stringSplitter"

class Contact extends React.Component {
  render() {
    return (
      <>
        <h1 className="contact-oyanadel">Oyanadel</h1>
        <div className="header">
          <div className="header-title">
            <a className="header-a" href="/">
              Home
            </a>
          </div>
          <ul className="header-links">
            <li>
              <a className="header-a" href="/work">
                work
              </a>
            </li>
            {/* <li>
              <a className="header-a" href="/contact">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
        <h3 className="contact-title">Send me a message!</h3>
        <div className="contact-form">
          <form
            name="contact"
            method="post"
            action="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <textarea
                name="message"
                placeholder="message me here.."
              ></textarea>
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
