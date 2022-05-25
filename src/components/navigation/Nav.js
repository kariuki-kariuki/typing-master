
import Button from "../custombtn/Button"
import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav(){

  return (
    <nav className="container-main p-5 ">
      <br />
      <NavLink to="/">
        <Button text="Home"  bradius="5px" />
      </NavLink>
      <br />
      <br />
      <NavLink to= "/test">
        <Button text='Test'  bradius = "5px" />
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