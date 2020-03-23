import React from "react"

function SplitString2() {
  const string = "Full Stack Web Developer"
  const splitstring = string.split("")
  return (
    <>
      <div className="split-container">
        {splitstring.map(letter => (
          <span className="each-letter-lrg">{letter}</span>
        ))}
      </div>
    </>
  )
}

export default SplitString2
