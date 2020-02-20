import React from "react"

function SplitString() {
  const string = "© 2020, from scratch by Eric"
  const splitstring = string.split("")
  return (
    <>
      <a href="/">
        {splitstring.map(letter => (
          <span className="each-letter-lrg">{letter}</span>
        ))}
      </a>
    </>
  )
}

export default SplitString
