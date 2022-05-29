import React, { useRef, useEffect, useState } from "react";

export default function Countdown({ setCount, handleFetch, handleInput, myLeng , wordLeng, setwords }) {
  const [num, setNum] = useState(0);
  const [start, setstart] = useState(false);

  let intervalRef = useRef();
  setCount(num);
  const decreaseNum = () => setNum((prev) => prev + 1);

  useEffect(() => {
    if (start) {
      intervalRef.current = setInterval(decreaseNum, 1000);

      return () => clearInterval(intervalRef.current);
    }
  }, [intervalRef]);

  

  function handlestart(){
    if(start){

    } else {
      setstart(true);
      intervalRef.current = setInterval(decreaseNum, 1000);
      handleFetch();
    }
    
  }

  function handlestop(){
    if (myLeng < wordLeng){
        alert("The input is short")
    } else {
      setstart(false);
      clearInterval(intervalRef.current);
      handleInput()
      
    }
    
  }

  function handleReset(){
    setstart(false)
    setNum(0)
    setCount(0)
    clearInterval(intervalRef.current);
    setwords('')
  }


  return (
    <div>
      <h1>{num} Time Elapsed</h1>
      <button className="start" onClick={handlestart}>
        {" "}
        Start
      </button>
      <button className="stop" onClick={handleReset}>
        Reset
      </button>
      <button className="stop" onClick={handlestop}>
        {" "}
        Stop{" "}
      </button>
    </div>
  );
}
