import React, {useState, useEffect} from "react";

export default function WindowTracker() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
      function watchWidth() {
        console.log("Setting up!")
        setWindowWidth(window.innerWidth)
      }
      
      window.addEventListener("resize", watchWidth)

      return function() {
        console.log("Clean up!")
        window.removeEventListener("resize", watchWidth)
      }
  }, [windowWidth])

  return(
    <>
     <h2>Window width: {windowWidth}</h2>
    </>
  ) 
}