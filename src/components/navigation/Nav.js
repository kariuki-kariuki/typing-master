
import Button from "../custombtn/Button"
import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav(){

  return (
    <nav className="container-main p-2 bg-dark ">
      <br />
        <NavLink to="/">
          <Button text="Home" backColor="#0000" bradius="5px" />
        </NavLink>
        <NavLink to="/login">
          <Button text="Login" backColor="#0000" bradius="5px" />
        </NavLink>

      <br />
      <hr />
    </nav>
  );
}

export default Nav