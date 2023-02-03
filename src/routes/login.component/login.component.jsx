import { useState } from "react";
import { Link } from "react-router-dom";
import {
  goSignInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../firebase.tools/firebase.tools";
import "./login.styles.scss";

const Login = () => {
  const getGoogleUser = async () => {
    await goSignInWithGooglePopup();
  };
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFieldValues({ ...formFieldValues, [name]: value });
  };

  const defaultInputValues = {
    email: "",
    password: "",
  };
  const [formFieldValues, setFormFieldValues] = useState(defaultInputValues);
  const { email, password } = formFieldValues;

  const emptyInputs = () => {
    setFormFieldValues(defaultInputValues);
  };
  const goSignInWithEmailAndPass = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      alert("Sign In Successfully!☝️😊");
      emptyInputs();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password! 😒");
          break;
        case "auth/user-not-found":
          alert("User not found! 🤔");
          break;
        default:
          console.log(error.code);
        // break;
      }
      console.log(error.code);
    }
  };
  return (
    <div className="form-container">
      <h1 className="primary_heading">Sing in</h1>
      <form onSubmit={goSignInWithEmailAndPass}>
        <input
          type="email"
          name="email"
          placeholder="your email"
          onChange={inputChangeHandler}
          value={email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="***"
          onChange={inputChangeHandler}
          value={password}
          required
        />
        <button>Sigin</button>
        <button type="button" className="google-button" onClick={getGoogleUser}>
          Sign in with google
        </button>
        <p>
          don't have an account?<Link to="/sign-up"> Sign up</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
