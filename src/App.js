import React, { useState } from 'react';
import Header from './components/Header';
import Planets from './components/Planets';
import bgImage from "./components/assets/background-stars.svg"
function App() {
  const [mainPage, setMainpage] = useState(false)
  function handleClick () {
    setMainpage(!mainPage)
    if(mainPage){
      console.log('true')
    } else (
      console.log('false')
    )
    
}

 
  return (
    <div className="App">
      <Header  handleClick={handleClick} mainPage={mainPage} setMainpage={setMainpage} />
      <Planets handleClick={handleClick} mainPage={mainPage} setMainpage={setMainpage}/>
    </div>
  );
}

export default App;
