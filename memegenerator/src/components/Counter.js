import React from "react"

export default function Counter(){
  const [result, setResult] = React.useState(0)

  function handleClick() {
    // setResult(result + 1)
    setResult(prevResult => prevResult + 1)
  }
  function handleRemove() {
    // setResult(result - 1)
    setResult(prevResult => prevResult - 1)
  }
  return(
    <>
      <p>{result}</p>
      <button onClick={handleRemove}>-</button>
      <button onClick={handleClick}>+</button>
    </>
  )
}