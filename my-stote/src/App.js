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
import { useSelector, useDispatch } from "react-redux";
import { signout } from "./action/userAction";
import { Link } from "@material-ui/core";
import SignUp from "./components/SignUp";
import ShippingAddress from "./components/ShippingAddress";
import Payment from "./components/Payment";
import PlaceOrder from "./components/PlaceOrder";
import OrderDetails from "./components/OrderDetails";

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
        <Route path="/cart/:id?" component={Cart}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={SignUp}></Route>
        <Route path="/shipping" component={ShippingAddress}></Route>
        <Route path="/payment" component={Payment}></Route>
        <Route path="/placeOrder" component={PlaceOrder}></Route>
        <Route path="/order/:id" component={OrderDetails}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
