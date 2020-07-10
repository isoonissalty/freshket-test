import React, { useState } from 'react'

const Question2 = () => {
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState('')

  const handleOnchange = (e) => {
    let { value } = e.target
    setInput(value)
  }

  const longSubStr = (value) => {
    let maxLen = 0
    let temp = ''
    for (let i = 0; i < value.length; i++) {
      if (temp.indexOf(value[i]) === -1) {
        temp = temp + value[i]

        if (maxLen < temp.length) maxLen = temp.length
      
      } else {
        temp = ''
      }
    }
    setAnswer(maxLen)
  }

  return (
    <div>
      <h2>Longest Substring Without Repeating Characters</h2>
      <div>
        <span>input: </span>
        <input value={input} onChange={handleOnchange} />
        <button onClick={() => longSubStr(input)}>submit</button>
      </div>
      <div>
        <span>output: </span>
        <span>{answer}</span>
      </div>
    </div>
  )
}

export default Question2
