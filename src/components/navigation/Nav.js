
// import Button from "../custombtn/Button"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
// import { useState } from "react";

// import Login from "../login/Login";

function Nav({login}){

  const [display, setDisplay] = useState(false)
  // const styles = {
  //   ba
  // }
  // const [login, setLogin] = useState(false)

  function handleBreadCrumb(){
    setDisplay(!display)
  }

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
      <button
        className="breadcrumb"
        onClick={handleBreadCrumb}
        style={{ color: "white" }}
      >
        <i
          className={display ? "fa fa-undo fa-fw" : "fa fa-align-justify fa-fw"}
        ></i>
      </button>
      <header className={display ? "block" : "none"}>
        <NavLink
          style={{ color: "white", fontSize: "15px" }}
          to="refactored-system/"
        >
          <i className="fa fa-house-damage fa-fw"></i> Home
        </NavLink>
        <NavLink
          style={{ color: "white", fontSize: "15px" }}
          to="refactored-system/test"
        >
          <i className="fa fa-hourglass-half fa-fw"></i> Test
        </NavLink>
        <NavLink
          style={{ color: "white", fontSize: "15px" }}
          to="refactored-system/dashboard"
        >
          <i className="fa fa-th fa-fw"></i>  Dashboard
        </NavLink>
        <NavLink
          style={{ color: "white", fontSize: "15px" }}
          to="refactored-system/login"
        >
          <i className="fa fa-unlock-alt"></i>  Login
        </NavLink>

        <NavLink
          style={{ color: "white", fontSize: "15px" }}
          to="refactored-system/signup"
        >
          <i className="fa fa-user-plus fa-fw"></i>  SignUp
        </NavLink>
      </header>
    </>
  );
}

export default Nav