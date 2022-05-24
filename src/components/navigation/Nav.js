
import Button from "../custombtn/Button"
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "./Nav.css"

function Nav(){

  return (
    <nav className="container-main p-2 bg-dark ">
      <br />
      <Router>
        <NavLink to="/">
          <Button text="Home" backColor="#0000" bradius="5px" />
        </NavLink>
      </Router>

      <br />
      <br />
      {/* <NavLink to="login">
        <Button text="About" backColor="#0000" bradius="5px" />
      </NavLink>
      <br />
      <br />
      <hr />
      <NavLink>
        <Button text="Contact" backColor="#0000" bradius="5px" />
      </NavLink>
      <br />
      <br />
      <NavLink to='test' exact>
        <Button text="Test" backColor="#0000" bradius="5px" />
      </NavLink>
      <br />
      <br />
      <hr />
      <NavLink>
        <Button text="Dashboard" backColor="#0000" bradius="5px" />
      </NavLink>
      <br />
      <br />
      <NavLink to="login" exact>
        <Button text="Login" backColor="#0000" bradius="5px" />
      </NavLink> */}
      <br />
      <hr />
    </nav>
  );
}

export default Nav