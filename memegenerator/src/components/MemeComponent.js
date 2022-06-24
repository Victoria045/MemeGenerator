import React from "react"
import meme from "../assets/memeimg.png";
import troll from "../assets/Troll Face.png";

import MemesData from "./MemesData";

export default function MemeComponent() {
  // function handleClicked(e){
  //   e.preventDefault();
  //   console.log('I was clicked!')
  //   setResult("No")
  // }
  function hovered(){
    console.log('Mango!')
  }
  const [memeResult, setMemeResult] = React.useState("")

  function getMemeImage(){
    const memesArray = MemesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)

    setMemeResult(memesArray[randomNumber].url)

  }

  const [isGoingOut, setIsGoingOut] = React.useState(true)
  // let answer = isGoingOut  ? "Yes" : "No"

  function toggle() {
  // const result = React.useState('Yes')
  // const [result, setResult] = React.useState("Yes")
  setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
  }
  
  // const thingsArray = ["Thing 1", "Thing 2"]

  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

  function clickedThings(){
    // setThingsArray(thingsArray.map(thing => <p>{thing}</p>))
    setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
  }

  // const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  const [addItems, setAddItems] = React.useState(["Item1", "Item2", "Item3"])

  function clickedAddItem() {
    setAddItems(prevState => [...prevState, `Item ${prevState.length + 1}`])
  }
  const itemsElements = addItems.map(thing => <p key={thing}>{thing}</p>)

  
  return(
    <>
      <form>
          <div className="form-input">
            <input type="text" placeholder="Shut up"/>
            <input type="text" placeholder="and take my money"/>
          </div> 
          <div className="btn">
            <button onClick={getMemeImage}>Get a new meme image</button>  
          </div>
      </form>
      <div className="meme-img">
        <img src={meme} />
        {/* <p><strong>{result}</strong></p> */}
      </div>
      {/* <h1>{answer}</h1> */}
      <button onClick={toggle}>Toggle</button>
      <button onClick={clickedThings}>Add Things</button>
      <p>{thingsArray}</p>
      <h1>{isGoingOut  ? "Yes" : "No"}</h1>
      <button onClick={clickedAddItem}>Add Items</button>
      {itemsElements}


    </>
  )
}