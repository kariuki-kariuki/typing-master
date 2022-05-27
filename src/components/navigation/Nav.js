
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
    <>
      <nav className="container-main p-5 .d-none .d-lg-block .d-xl-none">
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
        <NavLink
          style={{ color: "white", fontSize: "32px" }}
          to={login ? null : "/login"}
        >
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
      <header className=".d-none .d-sm-block .d-md-none">
        <NavLink style={{ color: "white", fontSize: "15px" }} to="/">
          Home
        </NavLink>
        <NavLink style={{ color: "white", fontSize: "15px" }} to="/test">
          Test
        </NavLink>
        <NavLink
          style={{ color: "white", fontSize: "15px" }}
          to={login ? null : "/login"}
        >
          Login
        </NavLink>
        <NavLink style={{ color: "white", fontSize: "15px" }} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink style={{ color: "white", fontSize: "15px" }} to="/signup">
          SignUp
        </NavLink>
      </header>
    </>
  );
}

export default Nav