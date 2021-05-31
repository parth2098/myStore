import "./App.css";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Groceries from "./components/Groceries";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import SingleProduct from "./components/SingleProduct";
import NavbarSecond from "./components/NavbarSecond";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavbarSecond />
      <Header />
      <Navbar />
      <div className="app text-center">
        <Route path="/" component={Home} exact></Route>
        <Route path="/grocery" component={Groceries} exact></Route>
        <Route path="/grocery/:id" component={SingleProduct}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/cart/:id?" component={Cart}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
