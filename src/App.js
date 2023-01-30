import "./App.css";
import Footer from "./components/footer.component/footer.component";
import Header from "./components/header.component/header.component";
import Main from "./components/main.component/main.component";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
