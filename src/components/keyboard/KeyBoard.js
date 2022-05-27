import "./keyboard.css"


function KeyBoard({input, handleInput}){
  return (
    <div
      className="container-fluid tests .d-none .d-lg-block .d-xl-none"
      id="Test"
    >
      <div className="container-main buttons">
        <div className="output">
          <p className="myOutput">{input}</p>
          <input
            className="myInput"
            type="text"
            value={input}
            onChange={handleInput}
            required
            placeholder="Type Here"
          />
        </div>
        <div className="half-btn btn-key"> ` </div>
        <div className="normal-btn btn-key">1</div>
        <div className="normal-btn btn-key">2</div>
        <div className="normal-btn btn-key">3</div>
        <div className="normal-btn btn-key">4</div>
        <div className="normal-btn btn-key">5</div>
        <div className="normal-btn btn-key">6</div>
        <div className="normal-btn btn-key">7</div>
        <div className="normal-btn btn-key">8</div>
        <div className="normal-btn btn-key">9</div>
        <div className="normal-btn btn-key">0</div>
        <div className="normal-btn btn-key">-</div>
        <div className="normal-btn btn-key">=</div>
        <div className="backspace btn-key">backspace</div>
        <div className="tab btn-key">tab</div>
        <div className="normal-btn btn-key">Q</div>
        <div className="normal-btn btn-key">W</div>
        <div className="normal-btn btn-key">E</div>
        <div className="normal-btn btn-key">R</div>
        <div className="normal-btn btn-key">T</div>
        <div className="normal-btn btn-key">Y</div>
        <div className="normal-btn btn-key">U</div>
        <div className="normal-btn btn-key">I</div>
        <div className="normal-btn btn-key">O</div>
        <div className="normal-btn btn-key">P</div>
        <div className="normal-btn btn-key">[</div>
        <div className="normal-btn btn-key">]</div>
        <div className="normal-btn btn-key">\</div>
        <div className="caps-lock btn-key">caps lock</div>
        <div className="normal-btn btn-key">A</div>
        <div className="normal-btn btn-key">S</div>
        <div className="normal-btn btn-key">D</div>
        <div className="normal-btn btn-key">F</div>
        <div className="normal-btn btn-key">G</div>
        <div className="normal-btn btn-key">H</div>
        <div className="normal-btn btn-key">J</div>
        <div className="normal-btn btn-key">K</div>
        <div className="normal-btn btn-key">L</div>
        <div className="normal-btn btn-key">;</div>
        <div className="normal-btn btn-key">'</div>
        <div className="enter btn-key">enter</div>
        <div className="shift btn-key">shift</div>
        <div className="normal-btn btn-key">Z</div>
        <div className="normal-btn btn-key">X</div>
        <div className="normal-btn btn-key">C</div>
        <div className="normal-btn btn-key">V</div>
        <div className="normal-btn btn-key">B</div>
        <div className="normal-btn btn-key">N</div>
        <div className="normal-btn btn-key">M</div>
        <div className="normal-btn btn-key">,</div>
        <div className="normal-btn btn-key">.</div>
        <div className="normal-btn btn-key">/</div>
        <div className="rt-shift btn-key">shift</div>
        <div className="normal-btn btn-key">ctrl</div>
        <div className="normal-btn btn-key">fn</div>
        <div className="normal-btn btn-key">home</div>
        <div className="normal-btn btn-key">alt</div>
        <div className="space btn-key">space</div>
        <div className="normal-btn btn-key">alt gr</div>
        <div className="normal-btn btn-key">ctrl</div>
        <div className="normal-btn btn-key"> ux </div>
        <div className="normal-btn btn-key">--</div>
        <div className="normal-btn btn-key"> ui</div>
      </div>
    </div>
  );
}

export default KeyBoard