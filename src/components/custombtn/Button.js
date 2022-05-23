import "./button.css"


function Button({text, backColor, bradius}){

  return (
    <button className="Button-custom" style={{backgroundColor : backColor, borderRadius : bradius}}>
      {text}
    </button>
  )
}

export default Button