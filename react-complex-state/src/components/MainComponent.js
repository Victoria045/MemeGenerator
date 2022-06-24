import React from "react";
import prof from "../assets/default.png";
import star from "../assets/star1.png";
import star2 from "../assets/star2.png";
import Count from "./Count";
import StarComponent from "./Star";

export default function MainComponent(props){
  const [contact, setContact] = React.useState({
    firstName: "Victoria",
    lastName: "Beryl",
    phone: "+1 (719) 555-1212",
    email: "victoria50@gmail.com",
    isFavorite: true,
  })

  // let starIcon = contact.isFavorite ? star : star2

  function toggle(){
    // setContact(prevState => {
    //   return{
    //     ...prevState,
    //     isFavorite:!prevState.isFavorite}
    // })

    setContact(prevContact => ({
      ...prevContact,
      isFavorite : !prevContact.isFavorite
    }))
    console.log("Clicked!")
    // setContact(prevState => [...prevState, isFavorite:!prevState.isFavorite])
  }
  
  const [count, setCount] = React.useState(0) 

  function add() {
    setCount(prevCount => prevCount + 1)
  }
  
  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  return(
    <div className="card">
      <h5>Welcome back, {props.name}!</h5>
      <img className="img1" src={prof} alt="..."/>
      {/* <img className="star" onClick={toggle} src={contact.isFavorite ? star : star2} alt="star" /> */}
      <StarComponent handleClick={toggle} contact={contact.isFavorite} />
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>

      <button onClick={add}>Add</button>
      <Count number={count} />
      <button onClick={subtract}>Subtract</button>
    </div>
  )
}