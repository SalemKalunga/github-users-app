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
      <h1 className="primary_heading">Login!</h1>
      <button className="google-button" onClick={getGoogleUser}>
        google
      </button>
    </div>
  );
};
export default Login;
