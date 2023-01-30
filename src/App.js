import "./App.css";
import Header from "./routes/header.component/header.component";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.component/home.component";
import Login from "./routes/login.component/login.component";
import SignUp from "./routes/sign-up.component/sign-up.component";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
