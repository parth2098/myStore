import "./App.css";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Groceries from "./components/Groceries";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app text-center">
        <Route path="/" component={Home} exact></Route>
        <Route path="/grocery" component={Groceries}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
