
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
        <NavLink
          style={{ color: "white", fontSize: "32px" }}
          to="refactored-system/"
        >
          #Home
        </NavLink>
        <br />
        <br />
        <NavLink
          style={{ color: "white", fontSize: "32px" }}
          to="refactored-system/test"
        >
          #Test
        </NavLink>
        <br />
        <br />
        <NavLink
          style={{ color: "white", fontSize: "32px" }}
          to="refactored-system/login"
        >
          #Login
        </NavLink>
        <br />
        <br />

        <NavLink
          style={{ color: "white", fontSize: "32px" }}
          to="refactored-system/dashboard"
        >
          #Dashboard
        </NavLink>
        <br />
        <br />
        <NavLink
          style={{ color: "white", fontSize: "32px" }}
          to="refactored-system/signup"
        >
          #SignUp
        </NavLink>

        <br />
        <hr />
      </nav>
      <header className="">
        <NavLink
          style={{ color: "white", fontSize: "15px" }}
          to="refactored-system/"
        >
          Home
        </NavLink>
        <NavLink style={{ color: "white", fontSize: "15px" }} to="refactored-system/test">
          Test
        </NavLink>
        <NavLink
          style={{ color: "white", fontSize: "15px" }}
          to="refactored-system/login"
        >
          Login
        </NavLink>
        <NavLink
          style={{ color: "white", fontSize: "15px" }}
          to="refactored-system/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          style={{ color: "white", fontSize: "15px" }}
          to="refactored-system/signup"
        >
          SignUp
        </NavLink>
      </header>
    </>
  );
}

export default Nav