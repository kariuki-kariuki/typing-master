import "./signup.css";
import { useState } from "react";
// import axios from "axios";


function SignUp(setAcc) {

  const [userdata, setUserData] = useState({
    name : "",
    email : '',
    password : '',
    id : ''
  })

  // const [ emails, setEmails] = useState([])
  // const getEmails = () =>{
  //   axios.get("http://localhost:4000/email")
  //   .then(res => res.data)
  //   .then(res => setEmails(res))
  // }
 
  // useEffect(() => {
  //   getEmails()
  // }, )
  // console.log(emails)

  function handleSubmit(e){
    e.preventDefault()
    setUserData({
      ...userdata, 
      id :  Math.floor(Math.random() * 2000000)
    })

    setAcc(userdata)
  }
  
  // function handleSubmit(e){
  //   e.preventDefault()
  //   setUserData({
  //     ...userdata, 
  //     id :  Math.floor(Math.random() * 2000000)
  //   })
  //   if(userdata.name !== '' && userdata.email !== '' && userdata.password.length > 5){
  //     console.log(userdata)
  //   }
  //   axios.post("http://localhost:4000/addtask", {
  //     userdata
  //   })
  // }
  // console.log(userdata)
  return (
    <div className="container-main  signup">
      <form className="signup-card " onSubmit={handleSubmit}>
        <h4>SignUp</h4>
        <span className="span1">Made for developers by developers</span>
        <input
          name="email"
          required
          type="email"
          value={userdata.email}
          className="inputEmail"
          onChange={(e) => setUserData({...userdata, email : e.target.value})}
          placeholder=" &#x1F4E9;  example@gmail.com"
        />
        <br />
        <br />

        <input
          name="fullName"
          type="text"
          value={userdata.name}
          required
          className="inputEmail"
          placeholder="    Sammy Doe"
          onChange={ (e) =>  setUserData(
            {
              ...userdata,
              name : e.target.value
            }
          )}
        />
        <br />
        <br />
        <input
          className="password"
          type="password"
          name="password"
          value={userdata.password}
          onChange = {(e) => setUserData({
            ...userdata,
            password : e.target.value
          })}
          placeholder="&#128272;..........."
        />
        <br />
        <br />
        <input type="checkbox" className="check" />
        <span> Agree To Terms And Policies?</span>
        <br />
        <br />
        <input type="submit" value="SignUp" className="submit" />
        <br />
        <div className="text-center">
          <p>
            {/* Already have an account? <a>Login.</a> */}
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
