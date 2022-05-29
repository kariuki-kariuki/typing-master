import "./test.css"
import { useEffect, useState } from "react"
import KeyBoard from "../keyboard/KeyBoard"
import Countdown from "./Timer"


// let wpm = 0 ; ratePercent = 0;

function Test({ setErrRate, setAccuracy, setWpm, setTimespeed }) {
  const [input, setInput] = useState("");
  const myLeng = input.length;
  const [word, setwords] = useState("");
  const wordLeng = word.length;
  const [rates, setRate] = useState(0);
  let [count, setCount] = useState(0);
  let btn = document.getElementsByClassName("btn-key");
  let right = 0;
  let wrong = 0;

  function handleFetch() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        "X-RapidAPI-Key": "18e37f9bf1msh17efa5b9b13e64fp1a52d6jsnf1e5561d4a85",
      },
    };
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
      .then((response) => response.json())
      .then((response) => {
        setCount(0);
        setwords(response.content);
        console.log(response.content);

        for (let i = 0; i < btn.length; i++) {
          if (btn[i].innerText === response.content.charAt(0).toUpperCase()) {
            btn[i].style.background = "yellow";
          } else if (
            btn[i].style.background === "yellow" &&
            btn[i].innerText !== response.content.charAt(0).toUpperCase()
          ) {
            btn[i].style.background = "black";
          }
        }
      });
  }

  // handleFetch()

  function calculateTime() {
    // word to type length from API
    let charLenght = word.length;

    // least time to complete the challenge
    let time = (charLenght / 3) * 60;

    // time taken in minutes
    let tt = count / 60;

    // speed in percentage of the time taken
    let speed = ( time - tt / time) * 100;

    // rate typos
    let wrongCount = (wrong / charLenght) * 100;

    // rate of typing all correct answer wpm
    let accurate = right / 3 / tt;

    // rate of  time taken per char in minutes to complete the challenge
    let rate = (right / charLenght) * 100;

    // set the accurate wrd per minute
    setErrRate(wrongCount)
    // setAccuracy(rate)
    setWpm(accurate)
    setTimespeed(speed)
    setRate(accurate);
    setAccuracy(rate)
  }

  useEffect(() => {
    // console.log(word.charAt(myLeng));
    for (let i = 0; i < btn.length; i++) {
      if (
        btn[i].style.background === "yellow" &&
        btn[i].innerText !== word.charAt(myLeng).toUpperCase()
      ) {
        btn[i].style.background = "black";
      }

      if (btn[i].innerText === word.charAt(myLeng - 1).toLocaleUpperCase()) {
        btn[i].style.background = "black";
      } else if (
        word.charAt(myLeng - 1) === " " &&
        btn[i].innerText === "space"
      ) {
        btn[i].style.background = "black";
      }

      if (btn[i].innerText === word.charAt(myLeng).toLocaleUpperCase()) {
        btn[i].style.background = "yellow";
      } else if (word.charAt(myLeng) === " " && btn[i].innerText === "space") {
        btn[i].style.background = "yellow";
      }
    }
  }, [myLeng, btn, word]);

  function handleInput(e) {
    setInput(e.target.value);

    // setMylength(() => input.length)
    // console.log(myLeng);

    // handleColor()
  }
  function calculateRight() {
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) === input.charAt(i)) {
        right += 1;
        // console.log(
        //   `value of i ${i} word char at i ${word.charAt(
        //     i
        //   )} input char at i ${input.charAt(i)}`
        // );
      } else {
        wrong += 1;
      }
    }
  }

  function handleInputs() {
    if (myLeng < word.length) {
      alert("Not complete");
    } else {
      calculateRight();
      // console.log(myLeng);
      // console.log(word.length);
      // console.log(input);
      // console.log(word);
      // console.log("The right count is ", right);
      // console.log("The wrong count is ", wrong);
      calculateTime();
      
      setCount(0);
      // setRight(0)
      setInput("");
      setwords("");
      right = 0;
      wrong = 0;
      // setWrong(0)
      // console.log(right);
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