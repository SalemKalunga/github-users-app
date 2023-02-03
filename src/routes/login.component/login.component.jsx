import { Link } from "react-router-dom";
import {
  createUserDocumentFromAuthUser,
  goSignInWithGooglePopup,
} from "../../firebase.tools/firebase.tools";
import "./login.styles.scss";
const Login = () => {
  const getGoogleUser = async () => {
    const { user } = await goSignInWithGooglePopup();
    createUserDocumentFromAuthUser(user);
    // console.log(response);
  };
  return (
    <div className="form-container">
      <h1 className="primary_heading">Sing in</h1>
      <form>
        <input type="email" placeholder="your email" required />
        <input type="password" placeholder="***" required />
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
