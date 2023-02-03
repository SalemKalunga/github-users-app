import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserDocumentFromAuthUser,
  createUserDocumentWithEmailAndPassword,
  goSignInWithGooglePopup,
} from "../../firebase.tools/firebase.tools";
import "./sign-up.styles.scss";

const SignUp = () => {
  const getGoogleUser = async () => {
    await goSignInWithGooglePopup();
  };
  const defaultInputValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Reset form fields
  const resetFormFields = () => {
    setFormFields(defaultInputValues);
  };
  const [formFields, setFormFields] = useState(defaultInputValues);
  const { displayName, email, password, confirmPassword } = formFields;

  const trackInputValue = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const signInWithEmailAndPassword = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("your passwords does not match");
      return;
    }
    try {
      const { user } = await createUserDocumentWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuthUser(user, {
        displayName,
      });
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          alert("your password is too week!");
          break;
        case "auth/email-already-in-use":
          alert("Looks like this email is already registered!");
          break;
        default:
      }
    }
  };

  return (
    <div className="form-container">
      <h1 className="primary_heading">Sign up</h1>
      <form onSubmit={signInWithEmailAndPassword}>
        <input
          type="text"
          name="displayName"
          required
          placeholder="your name"
          value={displayName}
          onChange={trackInputValue}
        />
        <input
          type="email"
          name="email"
          onChange={trackInputValue}
          placeholder="your email"
          value={email}
          required
        />
        <input
          type="password"
          name="password"
          onChange={trackInputValue}
          placeholder="***"
          value={password}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="***"
          onChange={trackInputValue}
          value={confirmPassword}
          required
        />
        <button>Sigin</button>
        <button type="button" className="google-button" onClick={getGoogleUser}>
          Sign up with google
        </button>
        <p>
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default SignUp;
