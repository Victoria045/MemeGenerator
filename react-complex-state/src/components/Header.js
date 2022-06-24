export default function Header(props) {
  return(
    <div className="header">
        <h3>Current user: {props.name}</h3>
    </div>
  )
}