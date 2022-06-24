import star from "../assets/star1.png";
import star2 from "../assets/star2.png";

export default function StarComponent(props) {

  // const starIcon = props.isFavorite ? star : star2

  return(
    <>
      <img className="star" onClick={props.handleClick} src={props.isFavorite ? star2 : star} alt="star" />
    </>
  )
}