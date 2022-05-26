import "./test.css"
import { useEffect, useState } from "react"
import KeyBoard from "../keyboard/KeyBoard"

function Test(){
  const [input, setInput] = useState('')
  const myLeng = input.length;
  const word = "Test "
  console.log(myLeng)
  // console.log(input.length)
  // let myLength = input.length
  // let buttons = document.getElementsByClassName("btn-key");


  
  // buttons.forEach(element => {
  //   if(element.innerText = '1'){
  //     element.style.color = "blue"
  //   }
  // });
  let btn = document.getElementsByClassName("btn-key");

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
  }, [myLeng, btn])

  function handleInput(e){
    setInput(e.target.value)
    // setMylength(() => input.length)
    console.log(myLeng);

    // handleColor()
  }

  return (
    <div className="container-main">
      <KeyBoard input = {input} handleInput = {handleInput}/>

    </div>
  )
}

export default Test