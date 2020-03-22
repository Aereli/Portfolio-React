import React from "react"

// import myFace from "../images/myface 2.png"
import myFace from "../images/myface 1.svg"

import "../stylesheets/home.css"

const Circles = () => {
  return (
    <>
      <img className="my-face-image" src={myFace} alt="face" />
    </>
  )
}

export default Circles
