import './App.css';
import MainComponent from './components/MainComponent';
import Header from './components/Header';
import React from 'react';
import boxes from './components/boxes';
import BoxComponent from './components/BoxComponent';
import Joke from './components/JokeComponent';
import jokes from './components/jokes';
import Message from './components/Messages';
import Form from './components/Forms';
import News from './components/Newsletter';

function App(props) {
  const [name, setName] = React.useState("Vikki")

  const [boxElements, setBoxElements] = React.useState(boxes)
  
  // const backgroundColor = props.darkMode ? '#dddddd' : 'red'

  const styles = {
    backgroundColor : boxes.on ? '#222222' : 'cccccc'
  }

  function boxClicked(id){
    console.log(id)

  //   setBoxElements(prevState => {
  //     const newBoxElements = []
  //     for(let i = 0; i < prevState.length; i++) {
  //       const currentElement = prevState[i]
  //       if(currentElement.id === id) {
  //         const updatedElement = {
  //           ...currentElement,
  //           on: !currentElement.on
  //         }
  //         newBoxElements.push(updatedElement)
  //       } else {
  //         newBoxElements.push(currentElement)
  //       }
  //     }
  //     return newBoxElements
  //   })

  setBoxElements(prevBoxElement => {
    return prevBoxElement.map(boxElement => {
      return boxElement.id === id ? {...boxElement, on:!boxElement.on} : boxElement
    })
  })
  }



  const boxItem = boxElements.map(boxElement => (
    // <div style={{backgroundColor}} className='box' key={boxElement.id}></div>
    // <div style={styles} className='box' key={boxElement.id}></div>
    <BoxComponent 
        key={boxElement.id} 
        // id={boxElement.id} 
        // handleClick={boxClicked} 
        handleClick={() => boxClicked(boxElement.id)}
        on={boxElement.on}
    />
  ))


  const [jokesElements, setJokesElements] = React.useState(jokes)

  const jokeItem = jokesElements.map(jokeElement =>
    (<Joke key={jokeElement.joke} jokeElement={jokeElement}/>)
  )

  return (
    <div>
      {/* <Header name={name} />
      <MainComponent name={name} /> */}
      {/* {boxItem} */}

      {/* {jokeItem} */}

      {/* <Message /> */}
      {/* <Form /> */}
      <News />
    </div>
  );
}

export default App;
