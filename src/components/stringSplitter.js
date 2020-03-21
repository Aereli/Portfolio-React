import React from "react"

function SplitString() {
  const string = "© 2020, from scratch by Eric"
  const splitstring = string.split("")
  return (
    <>
      {splitstring.map(letter => (
        <span className="each-letter-lrg">{letter}</span>
      ))}
    </>
  )
}

export default SplitString
