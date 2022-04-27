import React, { useState } from 'react'
import DigitButton from './DigitButton'
import './Numpad.css'

const Numpad = () => {
  const [result, setResult] = useState('')

  const handleClick = (e) => {
    setResult(() => result + String(e.target.value))
  }

  const handleAdd = (e) => {
    setResult(() => Number(result) + Number(e.target.value))
  }

  const clear = () => {
    setResult('')
  }

  return (
    <>
      <small>{result}</small>
      <form>
        <input
          name="7"
          onClick={handleClick}
          className="button digits"
          type="button"
          value="7"
        />
        <input
          name="8"
          onClick={handleClick}
          className="button digits"
          type="button"
          value="8"
        />
        <input
          name="9"
          onClick={handleClick}
          className="button digits"
          type="button"
          value="9"
        />
        <input
          onClick={handleAdd}
          name="100"
          className="button mathButtons"
          type="button"
          value="100"
        />
        <br />
        <input
          name="4"
          onClick={handleClick}
          className="button digits"
          type="button"
          value="4"
        />
        <input
          name="5"
          onClick={handleClick}
          className="button digits"
          type="button"
          value="5"
        />
        <input
          name="6"
          onClick={handleClick}
          className="button digits"
          type="button"
          value="6"
        />
        <input
          onClick={handleAdd}
          name="200"
          className="button mathButtons"
          type="button"
          value="200"
        />
        <br />
        <input
          name="1"
          onClick={handleClick}
          className="button digits"
          type="button"
          value="1"
        />
        <input
          name="2"
          onClick={handleClick}
          className="button digits"
          type="button"
          value="2"
        />
        <input
          name="3"
          onClick={handleClick}
          className="button digits"
          type="button"
          value="3"
        />
        <input
          onClick={handleAdd}
          name="500"
          className="button mathButtons"
          type="button"
          value="500"
        />
        <br />
        <input
          onClick={handleClick}
          name="0"
          className="button digits"
          type="button"
          value="0"
        />
        <input
          name="."
          onClick={handleClick}
          className="button digits"
          type="button"
          value="."
        />
        <input
          onClick={clear}
          id="clearButton"
          className="button"
          type="button"
          value="C"
        />

        <input
          onClick={handleAdd}
          className="button mathButtons"
          type="button"
          value="1000"
        />
      </form>
    </>
  )
}

export default Numpad
