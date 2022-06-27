import React, {useEffect} from "react"
import memeImg from "../assets/memeimg.png";
import troll from "../assets/Troll Face.png";

// import MemesData from "./MemesData";

export default function MemeComp() {
  const [meme, setMeme] = React.useState({
      "topText":"",
      "bottomText": "",
      "randomImage": memeImg
  })
 
  const [allMemeImages, setAllMemeImages] = React.useState({})

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemeImages(data))

    console.log('New image')
  }, [])

  function handleChange(event) {
    const{name, value} = event.target

    setMeme(prevMeme => ({
      ...prevMeme, 
      [name] : value
    }))
  }
  // console.log(meme)

  function handleSubmit(e){
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
      <form onSubmit={handleSubmit}>
          <div className="form-input">
            <input name="topText" value={meme.topText} type="text" onChange={handleChange} placeholder="Shut up"/>
            <input name="bottomText" value={meme.bottomText} type="text" onChange={handleChange} placeholder="and take my money"/>
          </div> 
          <div className="btn">
            <button>Get a new meme image</button>  
          </div>
      </form>
      <div className="meme-img">
        {/* <img src={memeItem} /> */}
        <img className="meme--image" src={meme.randomImage} />
        <h2 className="meme--text top">{meme.topText.toUpperCase()}</h2>
        <h2 className="meme--text bottom">{meme.bottomText.toUpperCase()}</h2>
      </div>
    </>
  )
}