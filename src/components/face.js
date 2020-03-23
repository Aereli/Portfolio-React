import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import myFace from "../images/myface_2.svg"
import SplitString2 from "./stringSplitter2"

import "../stylesheets/home.css"

const Face = () => {
  const [isToggled, setToggle] = useState(false)
  const fade = useSpring({
    opacity: isToggled ? 1 : 0
  })

  return (
    <>
      <animated.h1 className="toggle-text" style={fade}>
        {" "}
        <SplitString2 />
      </animated.h1>
      <button className="myface-button" onClick={() => setToggle(!isToggled)}>
        <img className="my-face-image" src={myFace} alt="face" />
      </button>
    </>
  )
}

export default Face
