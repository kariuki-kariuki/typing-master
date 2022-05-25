
import Button from "../custombtn/Button"
import { NavLink } from "react-router-dom";
import Test from "../test/Test";
import "./Nav.css"

function Nav(){

  return (
    <nav className="container-main p-2 bg-dark ">
      <br />
      <NavLink to="/">
        <Button text="Home"  bradius="5px" />
      </NavLink>
      <br />
      <br />
      <NavLink to= "/test">
        <Button text='home'  bradius = "5px" />
      </NavLink>
      <br />
      <br />
      <NavLink to="/login">
        <Button text="Login"  bradius="5px" />
      </NavLink>
      <br />
      <br />

      <NavLink to="/dashboard">
        <Button text="Dashboard" bradius="5px" />
      </NavLink>

      <br />
      <hr />
    </nav>
  );
}

export default Nav