import logo from "../../images/logo.svg";
import "./App.css";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Home from "../Home/Home";

export default function App() {
  return (
    <div className="App">
      <Home />
      <Main />
      <Footer />
    </div>
  );
}
