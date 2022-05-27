import "./test.css"
import { useEffect, useState } from "react"
import KeyBoard from "../keyboard/KeyBoard"
import Countdown from "./Timer"


function Test(){
  const [input, setInput] = useState('')
  const myLeng = input.length;
  const [word, setwords] = useState('')
  // const [keyEnter, setKeyEnter] = useState(false)
  const [rateP, setRatep] = useState(0)
  // const d = new Date()
  const wordLeng = word.length
  const [rates, setRate] = useState(0)
  let [count, setCount] = useState(0)
  let btn = document.getElementsByClassName("btn-key");
  let [right, setRight] = useState(0)
  let [wrong, setWrong] = useState(0)
  console.log(rateP)
  
  // console.log(count)
  function handleFetch(){
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
          "X-RapidAPI-Key":
            "18e37f9bf1msh17efa5b9b13e64fp1a52d6jsnf1e5561d4a85",
        },
      };
      fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
        .then((response) => response.json())
        .then((response) => {
          setCount(0)
          setwords(response.content)
          console.log(response.content)
          
          for(let i = 0; i < btn.length; i++){
            if(btn[i].innerText === response.content.charAt(0).toUpperCase()){
              btn[i].style.background = 'yellow'
            } else if(btn[i].style.background === 'yellow' && btn[i].innerText !== response.content.charAt(0).toUpperCase()){
              btn[i].style.background = 'black'
            }
          }
        });
  }

  // handleFetch()

  function calculateTime(){
    let charLenght = word.length
    let time = charLenght / 3 * 60
    let tt = count
    let rateTime = time - tt / time * 100;
    let rate = charLenght / 3 / (tt / 60);
    setRate(rate)
    setRatep(rateTime)
  }
  

  useEffect(() => {
    console.log(word.charAt(myLeng))
    for(let i = 0; i < btn.length; i++){
      if (
        btn[i].style.background === "yellow" &&
        btn[i].innerText !== word.charAt(myLeng).toUpperCase()
      ) {
        btn[i].style.background = "black";
      }


      if(btn[i].innerText === word.charAt(myLeng -1).toLocaleUpperCase()){
        btn[i].style.background = "black"
      } else if(word.charAt(myLeng-1) === ' ' && btn[i].innerText === "space"){
        btn[i].style.background = "black";
      }

      if (btn[i].innerText === word.charAt(myLeng).toLocaleUpperCase()) {
        btn[i].style.background = "yellow";
      } else if (word.charAt(myLeng) === " " && btn[i].innerText === "space") {
        btn[i].style.background = "yellow";
      }
    }
  }, [myLeng, btn, word])

  function handleInput(e){
    setInput(e.target.value)

    // setMylength(() => input.length)
    console.log(myLeng);

    // handleColor()
  }

  function handleInputs(){
    if(myLeng < word.length){
      alert("Not complete")
    } else {
        for (let i = 0; i < word.length; i++) {
          if (word.charAt(i) === input.charAt(i)) {
            setRight(right + 1);
          } else {
            setWrong(wrong + 1);
          }
        }
        console.log((right / word.length) * 100);
        calculateTime();

        setCount(0);
        setInput("");
        setwords("");
    }
    
  }

  return (
    <div className="container-main p-3 test">
      <h1>{Math.floor(rates)} WPM</h1>

      <Countdown
        setCount={setCount}
        handleFetch={handleFetch}
        handleInput={handleInputs}
        myLeng={myLeng}
        wordLeng={wordLeng}
        setwords={setwords}
      />
      <div className="textToDisplay">{word}</div>

      <KeyBoard input={input} handleInput={handleInput} />
    </div>
  );
}

export default Test