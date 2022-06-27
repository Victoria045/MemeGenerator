import React, {useState, useEffect} from "react";

export default function Star(){
  const [starWarsData, setStarWarsData] = useState({})

  const [count, setCount] = useState(1)

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))

    console.log("Effect ran")
  }, [count])

  // using async await with usEffect to access data from an API
  // useEffect(() => {
  //     async function getMemes() {
  //       const res = await fetch(`https://swapi.dev/api/people/${count}`)
  //       const data = await res.json()
  //       setStarWarsData(data)
    
  //     }
  //     getMemes()
  // }, [count])
  

  return(
      <div>
          <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
          <h1>{count}</h1>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      </div>
  )
}