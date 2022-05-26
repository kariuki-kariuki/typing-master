import "./Login.css"
import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";

function Login(){
  let [users, setUsers] = useState([])
  function getUsers (){
      axios.get("http://localhost:4000/users")
      .then((res) => res.data)
      .then(res => setUsers(res))
  }
  console.log(users)

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className="container-main  login">
      <div className="login-card ">
        <h4>Login</h4>
        <span className="span1">Login to manage your account</span>
        <input
          name="email"
          type="email"
          className="inputEmail"
          placeholder=" &#x1F4E9;  example@gmail.com"
        />
        <br />
        <br />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="&#128272;..........."
        />
        <br />
        <br />
        <input type="checkbox" className="check" />
        <span> Remember Me?</span>
        <br />
        <br />
        <input type="submit" value="Login" className="submit" /><br />
        <div className="text-center">
          <p>Don't have an account? 
                <NavLink to= "/signup" >SignUp</NavLink>
             </p>
          <p>Forget Password</p>
        </div>
      </div>
    </div>
  );
}

export default Login