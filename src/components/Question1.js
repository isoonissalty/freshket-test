import React, { useState } from 'react'

const RegQ1 = /^[58]{1,4}$/

const Question1 = () => {
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(false)
  const handleChange = (e) => {
    let { value } = e.target
    if (RegQ1.test(value)) {
      setInput(value)
      setError(false)
    } else
      setError(true)
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
      {
        error && <span>please enter only 5 or 8 digits and value between 1 - 10000</span>
      }
      <div>
        <span>output: </span>
        <span>{answer}</span>
      </div>
    </div>
  )
}

export default Question1
