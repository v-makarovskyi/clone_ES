import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/reset.scss";
import "../src/style.scss";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])


function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
   
  );
}

export default App;
