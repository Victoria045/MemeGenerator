import MemesData from "./MemesData";
import React from 'react';
import ReactDOM from 'react-dom';

export default function Things() {
  const thingsArray = ["Thing 1", "Thing 2"]

  const thingsItems = thingsArray.map(thingItem => <p key={thingItem}>{thingItem}</p>)

  // function handleClick(){
  //   const newThingsArray = `Thing ${thingsArray.length + 1}`
  //   thingsArray.push(newThingsArray)
  //   console.log({thingsArray})
  // }

  function handleClick(name){
    const date = new Date()
    const hours = date.getHours

    let timeOfDay
    if (hours >= 4 && hours < 12){
      timeOfDay = 'morning'
    } 
    else if (hours >= 12 && hours < 17){
      timeOfDay = 'afternoon'
    }
    else if (hours >= 17 && hours < 20){
      timeOfDay = 'evening'
    } else {
      timeOfDay = 'night'
    }
    // return `Good ${timeOfDay}, ${name}`
    console.log(`Good ${timeOfDay}, ${name}`)
  }
// handleClick('Vikki')
  return(
    <div>
      <button onClick={handleClick}>Add Item</button>
      {/* {timeOfDay} */}
    </div>
  )
}