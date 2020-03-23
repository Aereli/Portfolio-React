import React from "react"
import "../stylesheets/success.css"

class success extends React.Component {
  render() {
    return (
      <div className="success-container">
        <h1>Thanks!</h1>
        <button>
          <a href="/" name="home">
            Return to Home
          </a>
        </button>
      </div>
    )
  }
}

export default success
