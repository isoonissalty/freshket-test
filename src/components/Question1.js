import React, { useState } from 'react'

const Question1 = () => {
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState('')
  const handleChange = (e) => {
    let { value } = e.target
    setInput(value)
  }

  const maximum58Number = (value) => {
    let temp = value
    setAnswer(temp.replace('5', '8'))
  }

  return (
    <div>
      <h2>Maximum 58 Number</h2>
      <div>
        <span>input: </span>
        <input value={input} onChange={handleChange} />
        <button onClick={() => maximum58Number(input)}>submit</button>
      </div>
      <div>
        <span>output: </span>
        <span>{answer}</span>
      </div>
    </div>
  )
}

export default Question1
