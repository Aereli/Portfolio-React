import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

const Toggle = () => {
  const [isToggled, setToggle] = useState(false)
  const fade = useSpring({
    opacity: isToggled ? 1 : 0
  })

  return (
    <div>
      <animated.h1 style={fade}>Full Stack Web Developer</animated.h1>
      <button class="home-button" onClick={() => setToggle(!isToggled)}>
        I am a..{" "}
      </button>
    </div>
  )
}

export default Toggle
