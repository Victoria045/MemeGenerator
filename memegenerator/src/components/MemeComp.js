import React from "react"
import memeImg from "../assets/memeimg.png";
import troll from "../assets/Troll Face.png";

import MemesData from "./MemesData";

export default function MemeComp() {
  const [meme, setMeme] = React.useState({
      "topText":"",
      "bottomText": "",
      "randomImage": memeImg
  })
 
  const [allMemeImages, setAllMemeImages] = React.useState(MemesData)

  function handleClicked(e){
    e.preventDefault();

    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url

    // setMemeItem(memesArray[randomNumber].url)

    // const randomNumber = Math.floor(Math.random() * memeItem.length)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))

  }

  const [count, setCount] = React.useState(0)

  function add({count}) {
    setCount(count + 1)
  }
  function subtract({count}) {
    setCount(count - 1)
  }
  
  return(
    <>
      <form>
          <div className="form-input">
            <input type="text" placeholder="Shut up"/>
            <input type="text" placeholder="and take my money"/>
          </div> 
          <div className="btn">
            <button onClick={handleClicked}>Get a new meme image</button>  
          </div>
      </form>
      <div className="meme-img">
        {/* <img src={memeItem} /> */}
        <img src={meme.randomImage} />
      </div>
    </>
  )
}