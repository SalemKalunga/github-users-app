import { Link } from "react-router-dom";
import {
  createUserDocumentFromAuthUser,
  goSignInWithGooglePopup,
} from "../../firebase.tools/firebase.tools";
import "./sign-up.styles.scss";
const SignUp = () => {
  const getGoogleUser = async () => {
    const { user } = await goSignInWithGooglePopup();
    createUserDocumentFromAuthUser(user);
    // console.log(response);
  };
  return (
    <div className="form-container">
      <h1 className="primary_heading">Sign up</h1>
      <form>
        <input
          type="text"
          name="displayName"
          required
          placeholder="your name"
        />
        <input type="email" name="email" placeholder="your email" required />
        <input type="password" name="password" placeholder="***" required />
        <input
          type="password"
          name="confirmPassword"
          placeholder="***"
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
