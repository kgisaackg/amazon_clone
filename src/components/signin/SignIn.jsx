import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css"

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = (event) => {naa
    event.preventDefault();
    console.log("Have submited ", email, password)
    navigate("/")
  }

  const onRegister = (event) => {
    event.preventDefault();
    console.log("Register")
    navigate("/")
  }

  return (
    <div className='container'>

      <Link to="/">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
      </Link>

      <form className="signIn">
        <h3>Sign In</h3>
        <div className="signIn__formInput">
          <label>E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value) }
          />
        </div>
        <div className="signIn__formInput">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signIn__button-sign-in" onClick={onSubmit}>
          Sign In
        </button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam. Vero magni esse nisi quas quia quae?</p>
        <button type="submit" className="SignIn__button-create-account" onClick={onRegister}>
          Create Your Account
        </button>
      </form>
    </div>
  )
}

export default SignIn