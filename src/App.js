import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/reset.scss";
import "../src/style.scss";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";




function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </div>
   
  );
}

export default App;
