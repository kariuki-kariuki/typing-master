import "./signup.css";
function SignUp() {
  return (
    <div className="container-main  signup">
      <div className="signup-card ">
        <h4>SignUp</h4>
        <span className="span1">Made for developers by developers</span>
        <input
          name="email"
          type="email"
          className="inputEmail"
          placeholder=" &#x1F4E9;  example@gmail.com"
        />
        <br />
        <br />

        <input
          name="fullName"
          type="text"
          className="inputEmail"
          placeholder="    Sammy Doe"
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
        <span> Agree To Terms And Policies?</span>
        <br />
        <br />
        <input type="submit" value="SignUp" className="submit" />
        <br />
        <div className="text-center">
          <p>
            Already have an account? <a>Login.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;