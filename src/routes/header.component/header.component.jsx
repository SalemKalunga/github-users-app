import "./header.styles.scss";
import logo from "../../assets/logoCopy.png";
import { Fragment } from "react";
import Footer from "../../components/footer.component/footer.component";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { SignUserOut } from "../../firebase.tools/firebase.tools";
const Header = () => {
  const { userLogged, setUser } = useContext(UserContext);

  const logOut = async () => {
    await SignUserOut();
    setUser(null);
  };
  return (
    <Fragment>
      <header>
        <nav>
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="logo" width={100} />
            </Link>
          </div>
          <div className="links-container">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                {userLogged ? <span></span> : <Link to="/login">Login</Link>}
              </li>
              <li>
                {userLogged ? (
                  <span onClick={logOut}>Sign out</span>
                ) : (
                  <Link to="/sign-up">Sign Up</Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </Fragment>
  );
};
export default Header;
