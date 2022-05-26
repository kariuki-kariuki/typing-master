
import Button from "../custombtn/Button"
import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav(){

  return (
    <nav className="container-main p-5 ">
      <br />
      <NavLink to="/">
        Home
      </NavLink>
      <br />
      <br />
      <NavLink to="/test">
        Test
      </NavLink>
      <br />
      <br />
      <NavLink to="/login">
        Login
      </NavLink>
      <br />
      <br />

      <NavLink to="/dashboard">
        Dashboard
      </NavLink>
      <br />
      <br />
      <NavLink to="/signup">
        SignUp
      </NavLink>

      <br />
      <hr />
    </nav>
  );
}

export default Nav