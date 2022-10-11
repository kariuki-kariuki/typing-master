
// import Button from "../custombtn/Button"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

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
        <NavLink style={{ color: "white", fontSize: "1.5rem" }} to="/">
          #Home
        </NavLink>
        <br />
        <br />
        <NavLink style={{ color: "white", fontSize: "1.5rem" }} to="/test">
          #Test
        </NavLink>
        <br />
        <br />
        <NavLink style={{ color: "white", fontSize: "1.5rem" }} to="/login">
          #Login
        </NavLink>
        <br />
        <br />

        <NavLink style={{ color: "white", fontSize: "1.5rem" }} to="/dashboard">
          #Dashboard
        </NavLink>
        <br />
        <br />
        <NavLink style={{ color: "white", fontSize: "1.5rem" }} to="/signup">
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
        <NavLink style={{ color: "white", fontSize: "15px" }} to="/">
          <i className="fa fa-house-damage fa-fw"></i> Home
        </NavLink>
        <NavLink style={{ color: "white", fontSize: "15px" }} to="/test">
          <i className="fa fa-hourglass-half fa-fw"></i> Test
        </NavLink>
        <NavLink style={{ color: "white", fontSize: "15px" }} to="/dashboard">
          <i className="fa fa-th fa-fw"></i> Dashboard
        </NavLink>
        <NavLink style={{ color: "white", fontSize: "15px" }} to="/login">
          <i className="fa fa-unlock-alt"></i> Login
        </NavLink>

        <NavLink style={{ color: "white", fontSize: "15px" }} to="/signup">
          <i className="fa fa-user-plus fa-fw"></i> SignUp
        </NavLink>
      </header>
    </>
  );
}

export default Nav