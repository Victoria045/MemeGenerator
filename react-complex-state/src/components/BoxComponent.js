import React from 'react';

export default function BoxComponent(props) {

  // const [boxElement, setBoxElement] = React.useState(props.status)

  const styles = {
    backgroundColor : props.on ? '#222222' : '#cccccc'
  }
  
  return(
    <div 
        style={styles} 
        // onClick={() => props.handleClick(props.id)} 
        onClick={props.handleClick}
        className='box'
    >
    </div>
  )
}