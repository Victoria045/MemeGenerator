import troll from '../assets/Troll Face.png'
export default function Header() {
  return(
    <div className="header">
        <img src={troll} />
        <h2>Meme Generator</h2>
        <p>React Course - Project 3</p>
    </div>
  )
}