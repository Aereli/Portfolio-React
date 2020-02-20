import React from "react"

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-title">
        <a className="header-a" href="/">
          Home
        </a>
      </div>
      <ul className="header-links">
        {/* <li>
          <a className="header-a" href="/work">
            work
          </a>
        </li> */}
        <li>
          <a className="header-a" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
