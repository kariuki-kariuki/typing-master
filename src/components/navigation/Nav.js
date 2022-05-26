
// import Button from "../custombtn/Button"
import { NavLink } from "react-router-dom";
import "./Nav.css"
// import { useState } from "react";
// import Login from "../login/Login";

function Nav({login}){
  // const styles = {
  //   ba
  // }
  // const [login, setLogin] = useState(false)

  return (
    <nav className="container-main p-5 ">
      <br />
      <NavLink style={{ color: "white", fontSize: "32px" }} to="/">
        #Home
      </NavLink>
      <br />
      <br />
      <NavLink style={{ color: "white", fontSize: "32px" }} to="/test">
        #Test
      </NavLink>
      <br />
      <br />
      <NavLink style={{ color: "white", fontSize: "32px" }} to={login ? null : '/login'}>
        #Login
      </NavLink>
      <br />
      <br />

      <NavLink style={{ color: "white", fontSize: "32px" }} to="/dashboard">
        #Dashboard
      </NavLink>
      <br />
      <br />
      <NavLink style={{ color: "white", fontSize: "32px" }} to="/signup">
        #SignUp
      </NavLink>

      <br />
      <hr />
    </nav>
  );
}

export default Nav