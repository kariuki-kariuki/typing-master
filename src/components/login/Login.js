import "./Login.css"
import { NavLink } from "react-router-dom";
// import axios from 'axios'
import {  useState } from "react";

function Login({acc, setLogin}){
  let [users, setUsers] = useState({
    email : '',
    password : ''

  })

  function handleSubmit(e){
    e.preventDefault()
      if(users.email === acc.email && users.password === acc.password){
        setLogin(true)
      } else {
        alert("user not found: signUp if you do not have an acount")
      }
    
  }
  // function getUsers (){
  //     axios.get("http://localhost:4000/users")
  //     .then((res) => res.data)
  //     .then(res => setUsers(res))
  // }
  // console.log(users)

  // useEffect(() => {
  //   getUsers()
  // }, [])

  

  return (
    <div className="container-main  login">
      <form className="login-card " onSubmit={handleSubmit}>
        <h4>Login</h4>
        <span className="span1">Login to manage your account</span>
        <input
          name="email"
          type="email"
          value={users.email}
          className="inputEmail"
          placeholder=" &#x1F4E9;  example@gmail.com"
          onChange={(e) => setUsers({...users, email : e.target.value})}
        />
        <br />
        <br />
        <input
          className="password"
          type="password"
          value={users.password}
          name="password"
          placeholder="&#128272;..........."
          onChange={(e) => setUsers({...users, password : e.target.value})}
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
      </form>
    </div>
  );
}

export default Login