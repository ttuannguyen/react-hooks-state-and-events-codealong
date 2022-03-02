import React, { useState } from "react";


function Toggle() {
  
  const [isOn, setIsOn] = useState(false); 
  //call useState and provide an initial value = false bc btn should be off when component first renders

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }
  //call the setter function setIsOn to update our state var

  const color = isOn ? 'salmon' : 'white';

  
  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? 'ON' : 'OFF'}
    </button> 
  )
  //conditional rendering to dynamically determine btn's text based on state variable 

}

export default Toggle;
