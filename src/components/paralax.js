// import React from 'react'
// import { useSpring, animated } from 'react-spring'
// import ReactDOM from 'react-dom'



// function paralaxCircles() {
//   const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
//   const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
//   const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
//   const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
//   const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
//   const trans5 = (x) => `translate3d(${x/3.5}px)`

//   const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

//   return(

//     <div className="home-circles" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
//                 <animated.div id="circle1" style={{ transform: props.xy.interpolate(trans1) }}>
//                   <animated.div id="circle2" style={{ transform: props.xy.interpolate(trans2) }}>
//                     <animated.div id="circle3" style={{ transform: props.xy.interpolate(trans3) }}>
//                       <animated.div id="circle4" style={{ transform: props.xy.interpolate(trans4) }}>
//                         <div id="circle5">
//                         </div>
//                       </animated.div>
//                     </animated.div>
//                   </animated.div>
//                 </animated.div>
//               </div>

//   )
// }

// ReactDOM.render(<paralaxCircles />, document.getElementById('root'))
