import "./header.styles.scss";
import logo from "../../assets/logoCopy.png";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src={logo} alt="logo" width={100} />
        </div>
        <div className="links-container">
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">SignUp</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
