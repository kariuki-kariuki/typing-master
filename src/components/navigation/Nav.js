
import Button from "../custombtn/Button"

import "./Nav.css"

function Nav(){

  return (
    <nav className="container-main p-2 bg-dark ">
      <br />
      <Button text="Home" backColor="#0000" bradius="5px" />
      <br />
      <br />
      <Button text="About" backColor="#0000" bradius="5px" />
      <br />
      <br />
      <hr />
      <Button text="Contact" backColor="#0000" bradius="5px" />
      <br />
      <br />
      <Button text="Test" backColor="#0000" bradius="5px" />
      <br />
      <br />
      <hr />
      <Button text="Dashboard" backColor="#0000" bradius="5px" />
      <br />
      <br />
      <Button text="Login" backColor="#0000" bradius="5px" />
      <br />
      <hr />
    </nav>
  );
}

export default Nav