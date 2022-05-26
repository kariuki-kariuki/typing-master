
import Button from "../custombtn/Button"
import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav(){
  // const styles = {
  //   ba
  // }

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
      <NavLink style={{ color: "white", fontSize: "32px" }} to="/login">
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