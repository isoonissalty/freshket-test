import React, { useState } from 'react'

const Question2 = () => {
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState('')

  const handleOnchange = (e) => {
    let { value } = e.target
    setInput(value)
  }

  const longSubStr = (value) => {

  }

  return (
    <div>
      <h2>Longest Substring Without Repeating Characters</h2>
      <div>
        <span>input: </span>
        <input value={input} onChange={handleOnchange} />
        <button onClick={()=>longSubStr(input)}>submit</button>
      </div>
      <div>
        <span>output: </span>
        <span>{answer}</span>
      </div>
    </div>
  )
}

export default Question2
