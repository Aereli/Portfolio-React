import React, { useState } from 'react'
import {useSpring, animated} from 'react-spring'


const Fade = () => {

const fade = useSpring({
  from: { opacity: 0 }, to:{opacity: 1}
   

  })

  return(
   
    <animated.h1 style={fade} >Full Stack Web Developer</animated.h1>
  
  )
}

export default Fade