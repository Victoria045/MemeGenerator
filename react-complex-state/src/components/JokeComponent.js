import React from 'react'

export default function Joke(props){

  const [shown, setIsShown] = React.useState(false)

  // const styles = {
  //   display: 'none'
  // }

  function toggle(){
    console.log(shown)

    setIsShown(prevState => !prevState)
  }

  return (
    <>
      <div>
          <h3>{props.jokeElement.joke}</h3>
          {shown && <p>{props.jokeElement.punchline}</p>}
          <button onClick={toggle}>{shown ? "Hide" : "Show"} Punchline</button>
      </div>
      <hr/>
    </>
      
  )
}